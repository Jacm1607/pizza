import { IStrategy } from "src/interface/IStrategy";
import { Pizza } from "../pizza";
import { IResponseOrder } from "src/interface/IResponseOrder";

export class FreeDelivery implements IStrategy {
    public doAlgorithm(pizzas: Pizza, subtotal: number): IResponseOrder {
        return { 
            promo: "FreeDelivery",
            total: subtotal,
            pizza: pizzas
        };
    }
}