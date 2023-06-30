import { IStrategy } from "src/interface/IStrategy";

export class Context {
    private strategy: IStrategy;

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    doSomeBusinessLogic(subtotal) {
        return this.strategy.doAlgorithm(subtotal);
    }
}

