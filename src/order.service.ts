import { Injectable } from '@nestjs/common';
import { Context } from './class/promocionStrategy';
import { Promo2x1 } from './class/promo2x1.strategy';
import { FreeDelivery } from './class/freedelivery.strategy';
import { Normal } from './class/normal.strategy';
import { PizzaService } from './pizza.service';

@Injectable()
export class OrderService {
    total: number;
    date: Date = new Date();
    constructor(private pizzaService: PizzaService){}

  createOrder(arrayIdPizzas, date) {
    this.total = 0; 
    this.getTotalOrder(arrayIdPizzas);
    this.setModeOrder(date);
    return this.validateApplyPromo();
  }

  getTotalOrder(arrayIdPizzas) {
    arrayIdPizzas.map((idPizza) => {
      let result = this.pizzaService.listPizzaDefault.find(({ id }) => id === idPizza);
      this.total += result.price;
    });
    
  }

  setModeOrder(dateRequest: string) {
    if (dateRequest != undefined) {
      const dateArray = dateRequest.split('-')
      this.date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]));
    }
  }

  validateApplyPromo() {
    const context = new Context();
    const day = this.date.getDay();
    switch (day) {
      case 2:
        context.setStrategy(new Promo2x1());
        break;
        case 3:
        context.setStrategy(new Promo2x1());
        break;
        case 4:
        context.setStrategy(new FreeDelivery());
        break;
        default:
        context.setStrategy(new Normal())
        break;
    }
    return context.doSomeBusinessLogic(this.total);
  }
}

