import { IStrategy } from "src/interface/IStrategy";
import { Pizza } from "../pizza";
import { IResponseOrder } from "src/interface/IResponseOrder";

export class Promo2x1 implements IStrategy {
    public doAlgorithm(pizzas: Pizza, subtotal: number): IResponseOrder {
        return { 
            promo: "2x1",
            total: (subtotal / 2) + 15,
            pizza: pizzas
        };
    }
}