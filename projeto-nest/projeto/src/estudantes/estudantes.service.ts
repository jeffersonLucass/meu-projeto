import { Injectable } from '@nestjs/common';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import { Estudante } from './entities/estudante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudantesService {

  constructor(
    @InjectRepository(Estudante)
    private readonly repository: Repository<Estudante>,
  ){}

  create(dto: CreateEstudanteDto) {
    const estudante = this.repository.create(dto);
    return this.repository.save(estudante);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateEstudanteDto) {
    const estudante = await this.repository.findOneBy({ id });
    if (!estudante) return null;
    this.repository.merge(estudante, dto);
    return this.repository.save(estudante);
  }

  async remove(id: string) {
    const estudante = await this.repository.findOneBy({ id });
    if (!estudante) return null;
    return this.repository.remove(estudante);
  }
}
