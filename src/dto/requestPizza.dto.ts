import { IsNotEmpty, IsString } from "class-validator";

export class RequestPizzaDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly base: string;

    @IsString()
    @IsNotEmpty()
    readonly sauce: string;

    @IsString()
    @IsNotEmpty()
    readonly cheese: string;

    @IsString()
    @IsNotEmpty()
    readonly toppings: string;

}