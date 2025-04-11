import { IsDateString, IsEmail, IsNumber, IsString } from "class-validator"

export class CreateEstudanteDto {

    @IsString()
    nome: string

    @IsNumber()
    matricula: number
    
    @IsEmail()
    email: string

    @IsDateString()
    dt_nascimento: string

    @IsNumber()
    cidade_id: number
}
