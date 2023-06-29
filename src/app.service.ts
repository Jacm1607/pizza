import { Injectable } from '@nestjs/common';
import { PizzaBuilder } from './pizzaBuilder';

@Injectable()
export class AppService {
  private listPizza = [
    {
      name: 'Americana',
      price: 45,
      base: 'Normal',
      souce: 'Tomate',
      cheese: 'Muzzarella',
      topings: 'Jamon'
    },
    {
      name: '4 Quesos',
      price: 55,
      base: 'Normal',
      souce: 'Tomate',
      cheese: 'Muzzarella',
      topings: 'Jamon'
    }
  ]
  public listPizzaDefault = [];

  constructor() {
    this.listPizza.map((pizza) => {
      this.makePizza(pizza.name, pizza.base, pizza.souce, pizza.cheese, pizza.topings, pizza.price);
    })
  }

  makePizza(name, base, sauce, cheese, toppings, price) {
    const pizzaBuilder = new PizzaBuilder(this.listPizzaDefault.length+1, name, price);
    this.listPizzaDefault.push(pizzaBuilder.setBase(base).setSauce(sauce).setCheese(cheese).setToppings(toppings).build());
    return this.getPizzaDefault();
  }

  getPizzaDefault() {
    return this.listPizzaDefault;
  }
}
