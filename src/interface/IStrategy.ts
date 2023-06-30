export interface IStrategy {
    doAlgorithm(subtotal: number): number;
}