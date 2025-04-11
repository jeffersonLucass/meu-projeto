import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

const { nanoid } = require("nanoid")

@Entity('Ufs')
export class Uf {

    @PrimaryColumn()
    id: string
    
    @Column()
    nome: string
    
    @Column()
    sigla: string

    @BeforeInsert()
    generateId(){
        this.id = `dev_${nanoid()}`
    }
}
