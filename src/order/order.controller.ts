import { Controller, Get, Post, Body } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { OrdersService } from './order.service';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Post()
  create(@Body() order: Order): Promise<Order> {
    return this.ordersService.create(order);
  }
}
