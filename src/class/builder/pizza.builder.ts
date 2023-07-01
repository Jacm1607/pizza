import { Pizza } from "../pizza";

interface IBuilder {
    setBase(base: string): void;
    setSauce(sauce: string): void;
    setCheese(cheese: string): void;
    setToppings(toppings: string): void;
}

export class PizzaBuilder implements IBuilder {
    private pizza: Pizza

    base: string;
    sauce: string;
    cheese: string;
    toppings: string;
    

    constructor(id:string, name: string, price: number) {
        this.pizza = new Pizza(id, name, price);
    }

    setBase(base) { // base
        this.pizza.ingredients.base = base;
        return this;
    }

    setSauce(sauce) { //salsa
        this.pizza.ingredients.souce = sauce;
        return this;
    }

    setCheese(cheese) { //queso
        this.pizza.ingredients.cheese = cheese;
        return this;
    }

    setToppings(toppings) {  // ingrediente de relleno
        this.pizza.ingredients.toppings = toppings;
        return this;
    }

    build() {
        const result = this.pizza
        return result;
    }
}
