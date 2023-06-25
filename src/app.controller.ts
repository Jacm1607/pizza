import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Pizza } from './pizzaBuilder';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/default')
  pizzaDefault () {
    return this.appService.getPizzaDefault();
  }

  @Post('/default')
  makeDefault (@Body() request) {
    return this.appService.makePizza(request.id);
  }

  @Post('/custom')
  pizzaCustom (@Body() request): Pizza {
    const today = new Date();
    const weekday = today.getUTCDay()
    console.log(today)
    return this.appService.makePizzaCustom(request.base, request.sauce, request.cheese, request.toppings);
  }
}
