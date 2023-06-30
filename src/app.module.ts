import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PizzaService } from './pizza.service';
import { OrderService } from './order.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PizzaService, OrderService],
})
export class AppModule {}
