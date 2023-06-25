import { Injectable } from '@nestjs/common';
import { Pizza } from './pizzaBuilder';



@Injectable()
export class AppService {
  public listPizzaDefault: any = [
    {
      id: 1,
      name: 'Americana',
    },
    {
      id: 2,
      name: 'Cheeseburguer',
    },
    {
      id: 3,
      name: 'Hawaiana',
    },
    {
      id: 4,
      name: 'Strogonoff',
    },
    {
      id: 5,
      name: '4 Quesos',
    }
  ]

  getPizzaDefault() {
    return this.listPizzaDefault;
  }

  makePizza(id) {
    const makePizza = {
      1: this.makeAmericana(),
      2: this.makeCheeseburguer(),
      3: this.makeHawaiana(),
      4: this.makeStrogonoff(),
      5: this.make4Quesos(),
    }
    return makePizza[id] ?? 'No es una opcion valida. Intente nuevamente.';
  }

  makeAmericana(): Pizza {
    const americana = new Pizza();
    americana.setBase('Normal');
    americana.setSauce('Tomate');
    americana.setCheese('Muzzarella');
    americana.setToppings('Jamón y choclo');
    return americana;
  }

  makeCheeseburguer(): Pizza {
    const cheeseburguer = new Pizza();
    cheeseburguer.setBase('Normal');
    cheeseburguer.setSauce('Tomate');
    cheeseburguer.setCheese('Muzzarella');
    cheeseburguer.setToppings('Carne, tocino y cheddar');
    return cheeseburguer;
  }

  makeHawaiana(): Pizza {
    const hawaiana = new Pizza();
    hawaiana.setBase('Normal');
    hawaiana.setSauce('Tomate');
    hawaiana.setCheese('Muzzarella');
    hawaiana.setToppings('Carne, tocino y cheddar');
    return hawaiana;
  }

  makeStrogonoff(): Pizza {
    const strogonoff = new Pizza();
    strogonoff.setBase('Normal');
    strogonoff.setSauce('Strogonoff');
    strogonoff.setCheese('Muzzarella');
    strogonoff.setToppings('Papas fritas y carne');
    return strogonoff;
  }

  make4Quesos(): Pizza {
    const estaciones = new Pizza();
    estaciones.setBase('Normal');
    estaciones.setSauce('Tomate');
    estaciones.setCheese('Muzzarella, requesón, roquefort y cheddar');
    estaciones.setToppings('');
    return estaciones;
  }

  makePizzaCustom(base, sauce, cheese, toppings): Pizza {
    const pizza = new Pizza();
    pizza.setBase(base);
    pizza.setSauce(sauce);
    pizza.setCheese(cheese);
    pizza.setToppings(toppings);
    return pizza;
  }
}
