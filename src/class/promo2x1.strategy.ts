import { IStrategy } from "src/interface/IStrategy";

export class Promo2x1 implements IStrategy {
    public doAlgorithm(subtotal: number): number {
        return (subtotal / 2) + 15;
    }
}