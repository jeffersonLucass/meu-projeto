import { EstudantesService } from './estudantes.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
export declare class EstudantesController {
    private readonly estudantesService;
    constructor(estudantesService: EstudantesService);
    create(createEstudanteDto: CreateEstudanteDto): Promise<import("./entities/estudante.entity").Estudante>;
    findAll(): Promise<import("./entities/estudante.entity").Estudante[]>;
    findOne(id: string): Promise<import("./entities/estudante.entity").Estudante>;
    update(id: string, updateEstudanteDto: UpdateEstudanteDto): Promise<import("./entities/estudante.entity").Estudante>;
    remove(id: string): Promise<void>;
}
