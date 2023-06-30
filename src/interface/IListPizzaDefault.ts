export interface IListPizzaDefault {
    id:          string;
    name:        string;
    price:       number;
    ingredients: Ingredients;
}

export interface Ingredients {
    base:     string;
    souce:    string;
    cheese:   string;
    toppings: string;
}
