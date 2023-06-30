import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { RequestPizzaDto } from './dto/requestPizza.dto';
import { RequestOrderDto } from './dto/requestOrder.dto';
import { OrderService } from './order.service';

@Controller()
export class AppController {
  constructor(private readonly appService: PizzaService, private readonly orderService: OrderService) {}

  @Get('/pizzas')
  pizzaDefault () {
    return this.appService.getPizzaAll();
  }

  @Post('/pizza')
  @UsePipes(ValidationPipe)
  makeDefault (@Body() requestPizza: RequestPizzaDto) {
    return this.appService.makePizza(requestPizza.name, requestPizza.base, requestPizza.sauce, requestPizza.cheese, requestPizza.toppings, requestPizza.price);
  }

  @Post('/order')
  order (@Body() requestOrder: RequestOrderDto) {
    return this.orderService.createOrder(requestOrder.idPizzas.split(','), requestOrder.date);
  }
}
