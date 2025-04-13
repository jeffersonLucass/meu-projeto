import { Estudante } from "src/estudantes/entities/estudante.entity"
import { Uf } from "src/ufs/entities/uf.entity"
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"

const {nanoid} = require("nanoid")

@Entity("cidades")
export class Cidade {

    @PrimaryColumn()
    id: string

    @Column()
    nome: string
    
    // Relacionamento com UF
    @ManyToOne(() => Uf, (uf) => uf.cidades)
    uf: Uf

    @OneToMany(() => Estudante  , (estudante) => estudante.cidade)
    estudantes: Estudante[]


    @BeforeInsert()
    generateId(){
        this.id = `dev_${nanoid()}`
    }
}
