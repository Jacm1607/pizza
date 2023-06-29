export class Pizza {
    public ingredients: any = {};

    constructor (private id: number, private name: string, private price: number) {}

    public listPizza(): void {
        console.log(this.ingredients);
    }
}