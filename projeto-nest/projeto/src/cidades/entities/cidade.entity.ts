import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

const {nanoid} = require("nanoid")

@Entity("cidades")
export class Cidade {

    @PrimaryColumn()
    id: string

    @Column()
    nome: string
    
    @Column()
    uf_id: number

    @BeforeInsert()
    generateId(){
        this.id = `dev_${nanoid()}`
    }
}
