import { IsNotEmpty, IsString } from "class-validator";

export class RequestOrderDto {
    @IsString()
    @IsNotEmpty()
    readonly idPizzas: string;

    @IsString()
    @IsNotEmpty()
    readonly date: string;
}