import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/pizzas')
  pizzaDefault () {
    return this.appService.getPizzaDefault();
  }

  @Post('/pizza')
  makeDefault (@Body() request) {
    return this.appService.makePizza(request.name, request.base, request.sauce, request.cheese, request.toppings, Number(request.price));
  }

  @Post('/order')
  pizzaCustom (@Body() request) {
    const today = new Date();
    console.log(request)
    return request
  }
}
