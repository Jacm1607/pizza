import { Injectable } from '@nestjs/common';
import { PizzaBuilder } from './class/builder/pizza.builder';
import { Pizza } from './class/pizza';
import { IPizzaDefault } from './interface/IPizzaDefault';

@Injectable()
export class PizzaService {
  private listPizza: IPizzaDefault[] = [
    {
      name: 'Americana',
      price: 50,
      base: 'Normal',
      souce: 'Tomate',
      cheese: 'Muzzarella',
      topings: 'Jamon'
    },
    {
      name: '4 Quesos',
      price: 50,
      base: 'Normal',
      souce: 'Tomate',
      cheese: 'Muzzarella',
      topings: 'Jamon'
    }
  ]
  public listPizzaDefault: any = [];

  constructor() {
    this.listPizza.forEach((pizza) => {
      this.makePizza(pizza.name, pizza.base, pizza.souce, pizza.cheese, pizza.topings, pizza.price);
    })
  }

  makePizza(name: string, base: string, sauce: string, cheese: string, toppings: string, price: number): Pizza {
    const pizzaBuilder = new PizzaBuilder(`${this.listPizzaDefault.length + 1}`, name, price);
    this.listPizzaDefault.push(pizzaBuilder.setBase(base).setSauce(sauce).setCheese(cheese).setToppings(toppings).build());
    return this.getPizzaAll();
  }

  getPizzaAll(): Pizza {
    return this.listPizzaDefault;
  }
}

