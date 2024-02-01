import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetsModule } from './assets/assets.module';
import { Asset } from './assets/entities/asset.entity';
import { Order } from './order/entities/order.entity';
import { OrdersModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Asset, Order],
      synchronize: true,
    }),
    AssetsModule,
    OrdersModule,
  ],
})
export class AppModule {}
