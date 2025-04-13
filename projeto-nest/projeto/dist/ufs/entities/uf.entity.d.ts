import { Cidade } from "src/cidades/entities/cidade.entity";
export declare class Uf {
    id: string;
    nome: string;
    sigla: string;
    cidades: Cidade[];
    generateId(): void;
}
