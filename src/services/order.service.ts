import { ServiceResponse } from '../types/ServiceResponse';
import OrderModel from '../database/models/order.model';
import { GetProductsByOrder, OrderWithProductIds } from '../types/Order';

async function anyProductsByOrder(): Promise<ServiceResponse<OrderWithProductIds[]>> {
  const orderArray = await OrderModel.findAll({ include: 'productIds' });
  
  const orderValueData = orderArray.map((order) => order
    .dataValues) as unknown as GetProductsByOrder[];

  const listOrders = orderValueData.map(({ id, userId, productIds }) => ({
    id,
    userId,
    productIds: productIds.map((product) => product.id),
  }));

  return { status: 'SUCCESSFUL', data: listOrders };
}

export default {
  anyProductsByOrder,
};