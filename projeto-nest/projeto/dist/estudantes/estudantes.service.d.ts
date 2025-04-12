import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import { Estudante } from './entities/estudante.entity';
import { Repository } from 'typeorm';
export declare class EstudantesService {
    private readonly repository;
    constructor(repository: Repository<Estudante>);
    create(dto: CreateEstudanteDto): Promise<Estudante>;
    findAll(): Promise<Estudante[]>;
    findOne(id: string): Promise<Estudante | null>;
    update(id: string, dto: UpdateEstudanteDto): Promise<Estudante | null>;
    remove(id: string): Promise<Estudante | null>;
}
