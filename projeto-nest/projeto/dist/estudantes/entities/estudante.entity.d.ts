import { Cidade } from "src/cidades/entities/cidade.entity";
export declare class Estudante {
    id: string;
    nome: string;
    matricula: number;
    email: string;
    dt_nascimento: string;
    cidade: Cidade;
    generateId(): void;
}
