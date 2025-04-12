import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
export declare class UfsService {
    private readonly repository;
    constructor(repository: Repository<Uf>);
    create(dto: CreateUfDto): Promise<Uf>;
    findAll(): Promise<Uf[]>;
    findOne(id: string): Promise<Uf | null>;
    update(id: string, dto: UpdateUfDto): Promise<Uf | null>;
    remove(id: string): Promise<Uf | null>;
}
