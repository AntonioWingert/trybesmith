import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';
import CustomRequest from '../interfaces/customRequest';

export default class OrdersController {
  ordersService: OrdersService;

  constructor(ordersService = new OrdersService()) {
    this.ordersService = ordersService;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const orders = await this.ordersService.getAll();

    res.status(200).json(orders);
  }

  async create(req: CustomRequest, res: Response): Promise<void> {
    const { productsIds, userId } = req.body;

    const order = await this.ordersService.create(Number(userId), productsIds);

    res.status(201).json(order);
  }
}