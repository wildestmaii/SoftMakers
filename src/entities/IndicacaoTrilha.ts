import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Trilha } from "./Trilha";
import { Usuario } from "./Usuario";

@Entity('indicacao_trilha')
export class IndicacaoTrilha {
    @PrimaryColumn()
    trilha_id: number;
    
    @PrimaryColumn()
    usuario_id: number;
    //
    @OneToMany(() => Trilha, Trilha => Trilha.id)
    trilha: Trilha[];
    //
    @OneToMany(() => Usuario, Usuario => Usuario.id)
    usuario: Usuario[];

}