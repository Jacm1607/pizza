export class Pizza {
    public base: string = '';
    public sauce: string;
    public cheese: string;
    public toppings: any;
    setBase(base) { // base
        this.base = base;
        return this;
    }

    setSauce(sauce) { //salsa
        this.sauce = sauce;
        return this;
    }

    setCheese(cheese) { //queso
        this.cheese = cheese;
        return this;
    }

    setToppings(toppings) {  // ingrediente de relleno
        this.toppings = toppings;
        return this;
    }

    make() {
        console.log(this);
    }
}
