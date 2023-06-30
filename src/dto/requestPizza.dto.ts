import { IsNumber, IsString } from "class-validator";

export class RequestPizzaDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly base: string;

    @IsString()
    readonly sauce: string;

    @IsString()
    readonly cheese: string;

    @IsString()
    readonly toppings: string;

    @IsNumber()
    readonly price: number;

}