import { IsString } from "class-validator";

export class RequestOrderDto {
    @IsString()
    readonly idPizzas: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly date: string;
}