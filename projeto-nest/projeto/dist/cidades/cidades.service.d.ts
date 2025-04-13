import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Repository } from 'typeorm';
import { Cidade } from './entities/cidade.entity';
export declare class CidadesService {
    private readonly repository;
    constructor(repository: Repository<Cidade>);
    create(dto: CreateCidadeDto): Promise<Cidade>;
    findAll(): Promise<Cidade[]>;
    findOne(id: string): Promise<Cidade | null>;
    update(id: string, dto: UpdateCidadeDto): Promise<Cidade | null>;
    remove(id: string): Promise<Cidade | null>;
}
