import { IStrategy } from "src/interface/IStrategy";

export class Normal implements IStrategy {
    public doAlgorithm(subtotal: number): number {
        return subtotal + 15;
    }
}