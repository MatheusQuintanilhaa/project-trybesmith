import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;

  const serviceResponse = await productService.createAnyProduct({ name, price, orderId });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  return res.status(201).json(serviceResponse.data);
};

export default {
  create,
};