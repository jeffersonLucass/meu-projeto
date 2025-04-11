import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

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

    @Column()
    cidade_id: number

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`
    }
}
