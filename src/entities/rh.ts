import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rh')
export class Rh {
    @PrimaryGeneratedColumn()

    @Column({ type: 'int', nullable: false })
    nome: string;


}
