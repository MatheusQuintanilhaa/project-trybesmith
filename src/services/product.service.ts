import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel,
} from '../database/models/product.model';

function validateParams({
  name,
}: ProductInputtableTypes): { status: string; message: string } {
  if (!name) return { status: 'INVALID_DATA', message: '"name" is required' };
  if (typeof name !== 'string') return { status: 'UN_ENTITY', message: '"name" must be a string' };
  if (name.length < 3) {
    return { status: 'UN_ENTITY', message: '"name" length must be at least 3 characters long' };
  }

  return { status: '', message: '' };
}

function validatePriceParams({
  price,
}: ProductInputtableTypes): { status: string; message: string } {
  if (!price) return { status: 'INVALID_DATA', message: '"price" is required' };
  if (typeof price !== 'string') {
    return { status: 'UN_ENTITY', message: '"price" must be a string' };
  }
  if (price.length < 3) {
    return { status: 'UN_ENTITY', message: '"price" length must be at least 3 characters long' };
  }

  return { status: '', message: '' };
}

async function myList(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const anyProducts = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: anyProducts };
}

async function createAnyProduct(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  let responseService: ServiceResponse<Product>;

  const nameError = validateParams(product);

  if (nameError.status) {
    const nameMessage = nameError.message;
    responseService = { status: nameError.status, data: { message: nameMessage } };
    return responseService;
  }

  const ValueGlitch = validatePriceParams(product);

  if (ValueGlitch.status) {
    const PricingNotice = ValueGlitch.message;
    responseService = { status: ValueGlitch.status, data: { message: PricingNotice } };
    return responseService;
  }

  const BuildProduce = await ProductModel.create(product);
  const { id, name, price } = BuildProduce.dataValues;

  return { status: 'SUCCESSFUL', data: { id, name, price } };
}

export default {
  createAnyProduct,
  myList,
};
