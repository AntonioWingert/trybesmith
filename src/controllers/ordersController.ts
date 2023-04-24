import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  ordersService: OrdersService;

  constructor(ordersService = new OrdersService()) {
    this.ordersService = ordersService;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const orders = await this.ordersService.getAll();

    res.status(200).json(orders);
  }
}