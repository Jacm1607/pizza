import { Injectable, NotFoundException } from '@nestjs/common';
import { FreeDelivery } from './class/strategy/freedelivery.strategy';
import { PizzaService } from './pizza.service';
import { Context } from './class/strategy/promocionStrategy';
import { Promo2x1 } from './class/strategy/promo2x1.strategy';
import { Normal } from './class/strategy/normal.strategy';
import { Pizza } from './class/pizza';

@Injectable()
export class OrderService {
  pizza: any = [];
  total: number;
  date: Date = new Date();
  constructor(private pizzaService: PizzaService) { }

  createOrder(arrayIdPizzas: Array<any>, date: string) {
    try {
      this.resetValue();
      this.getTotalOrder(arrayIdPizzas);
      this.setModeOrder(date);
      return this.validateApplyPromo();
    } catch (error) {
      return new NotFoundException('Not found product')
    }
  }

  getTotalOrder(arrayIdPizzas: Array<any>) {
    arrayIdPizzas.forEach((idPizza) => {
      let result: Pizza = this.pizzaService.listPizzaDefault.find(({ id }) => id === idPizza.trim());
      this.total += result.price;
      this.pizza.push(result);
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
    return context.execute(this.pizza, this.total);
  }

  resetValue() {
    this.total = 0;
    this.pizza = [];
  }
}

