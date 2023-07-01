import { IStrategy } from "src/interface/IStrategy";
import { Pizza } from "../pizza";
import { IResponseOrder } from "src/interface/IResponseOrder";

export class Normal implements IStrategy {
    public doAlgorithm(pizzas: Pizza, subtotal: number): IResponseOrder {
        return { 
            promo: "no apply",
            total: subtotal + 15,
            pizza: pizzas
        };
    }
}