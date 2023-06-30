export class Pizza {
    public ingredients: any = {};

    constructor (public id: string, public name: string, public price: number) {}

    public listPizza(): void {
        console.log(this.ingredients);
    }
}