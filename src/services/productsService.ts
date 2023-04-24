import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import Product from '../interfaces/productsInterface';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async create(name: string, amount: number): Promise<Product> {
    const product = { name, amount };

    const result = await this.model.create(product);

    return result;
  }
}