import { Estudante } from "src/estudantes/entities/estudante.entity";
import { Uf } from "src/ufs/entities/uf.entity";
export declare class Cidade {
    id: string;
    nome: string;
    uf: Uf;
    estudantes: Estudante[];
    generateId(): void;
}
