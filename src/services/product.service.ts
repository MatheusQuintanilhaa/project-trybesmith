import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel,
} from '../database/models/product.model';

function validateParams({
  name,
  price,
  orderId,
}: ProductInputtableTypes): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price is required';
  if (!orderId) return 'Order Id is required';

  return null;
}

async function myList(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const anyProducts = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: anyProducts };
}
async function createAnyProduct(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  let responseService: ServiceResponse<Product>;

  const error = validateParams(product);

  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }

  const newProduct = await ProductModel.create(product);

  responseService = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return responseService;
}

export default {
  createAnyProduct,
  myList,
};