import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Gerenciador } from "./Gerenciador";
import { Usuario } from "./Usuario";

@Entity('avaliacao')
export class Avaliacao {
    @PrimaryColumn()
    usuario_id: number;

    @Column()
    gerenciador_id: number;

    @Column('json', { nullable: false })
    dados: object;

    @Column('varchar', { nullable: false, length: 20 })
    tipo_relatorio: string;

    @OneToMany(() => Usuario, Usuario => Usuario.id)
    usuario: Usuario[];

    @OneToMany(() => Gerenciador, Gerenciador => Gerenciador.id)
    gerenciador: Gerenciador[];


}