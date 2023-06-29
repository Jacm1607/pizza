import { Pizza } from "./pizza";

interface IBuilder {
    setBase(base: string): void;
    setSauce(sauce: string): void;
    setCheese(cheese: string): void;
    setToppings(toppings: string): void;
}

export class PizzaBuilder implements IBuilder {
    private product: Pizza

    base: string;
    sauce: string;
    cheese: string;
    toppings: string;
    

    constructor(id:number, name: string, price: number) {
        this.product = new Pizza(id, name, price);
    }

    setBase(base) { // base
        this.product.ingredients.base = base;
        return this;
    }

    setSauce(sauce) { //salsa
        this.product.ingredients.souce = sauce;
        return this;
    }

    setCheese(cheese) { //queso
        this.product.ingredients.cheese = cheese;
        return this;
    }

    setToppings(toppings) {  // ingrediente de relleno
        this.product.ingredients.toppings = toppings;
        return this;
    }

    build() {
        const result = this.product
        return result;
    }
}
