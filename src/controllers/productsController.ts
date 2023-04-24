import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  productsService: ProductsService;

  constructor(productsService = new ProductsService()) {
    this.productsService = productsService;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;

    const result = await this.productsService.create(name, amount);

    res.status(201).json(result);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.productsService.getAll();

    res.status(200).json(result);
  }
}