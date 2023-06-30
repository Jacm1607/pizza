import { IStrategy } from "src/interface/IStrategy";

export class FreeDelivery implements IStrategy {
    public doAlgorithm(subtotal: number): number {
        console.log(subtotal)
        return subtotal;
    }
}