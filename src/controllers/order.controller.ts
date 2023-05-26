import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function anyProductsByOrder(_req: Request, res: Response) {
  const serviceResponse = await orderService.anyProductsByOrder();

  res.status(200).json(serviceResponse.data);
}

export default {
  anyProductsByOrder,
};