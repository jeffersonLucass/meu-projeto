import { Injectable } from '@nestjs/common';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UfsService {

  constructor(
    @InjectRepository(Uf)
    private readonly repository: Repository<Uf>,
  ){}

  create(dto: CreateUfDto) {
    const ufs = this.repository.create(dto);
    return this.repository.save(ufs);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateUfDto) {
    const ufs = await this.repository.findOneBy({ id });
    if (!ufs) return null;
    this.repository.merge(ufs, dto);
    return this.repository.save(ufs);
  }

  async remove(id: string) {
    const ufs = await this.repository.findOneBy({ id });
    if (!ufs) return null;
    return this.repository.remove(ufs);
  }
}

