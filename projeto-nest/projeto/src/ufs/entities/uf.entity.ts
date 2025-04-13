import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { Cidade } from "src/cidades/entities/cidade.entity"
const { nanoid } = require("nanoid")

@Entity('Ufs')
export class Uf {

    @PrimaryColumn()
    id: string
    
    @Column()
    nome: string
    
    @Column()
    sigla: string

    //Relacionamento : Uma UF tem varias cidades

    @OneToMany(() => Cidade, (cidade) => cidade.uf)
    cidades: Cidade[]

    @BeforeInsert()
    generateId(){
        this.id = `dev_${nanoid()}`
    }
}
