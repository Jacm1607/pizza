import { Pizza } from "src/class/pizza";

export interface IResponseOrder {
    promo: string;
    total: number;
    pizza: Pizza[] | Pizza;
}
