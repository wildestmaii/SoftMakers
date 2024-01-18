import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Avaliacao } from "./Avaliacao";

@Entity('gerenciador')
export class Gerenciador {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column("varchar", {length: 45, nullable:false})
    nome: string;

    @Column('varchar', { length: 30, nullable: false, unique: true })
    email: string;

    @Column('varchar', { length: 30, nullable: false })
    senha: string;

    @Column('varchar', { length: 15, nullable: false })
    tipo_gerenciador: string;

    @ManyToOne(() => Avaliacao, Avaliacao => Avaliacao.usuario_id)
    @JoinColumn({name: "usuario_id"})
    avaliacao: Avaliacao[];

}