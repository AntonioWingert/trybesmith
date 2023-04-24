import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';
import Order from '../interfaces/orderInterface';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();

    return result;
  }
}