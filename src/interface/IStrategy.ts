import { Pizza } from "src/class/pizza";

export interface IStrategy {
    doAlgorithm(pizza: Pizza, subtotal: number): object;
}