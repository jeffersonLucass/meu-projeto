import { Cidade } from "src/cidades/entities/cidade.entity"
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"

const { nanoid } = require("nanoid")

@Entity("Estudantes")
export class Estudante {

    @PrimaryColumn()
    id: string

    @Column()
    nome: string

    @Column()
    matricula: number
    
    @Column()
    email: string

    @Column()
    dt_nascimento: string

    // Relacionamento com Cidade (substitui o campo cidade_id)

    @ManyToOne(() => Cidade, (cidade) => cidade.estudantes)
    cidade: Cidade

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`
    }
}
