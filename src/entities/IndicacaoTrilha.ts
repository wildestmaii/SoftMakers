import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Trilha } from "./Trilha";
import { Usuario } from "./Usuario";

@Entity('indicacao_trilha')
export class IndicacaoTrilha {
    @PrimaryColumn()
    trilha_id: number;
    
    @PrimaryColumn()
    usuario_id: number;
    
    @ManyToOne(() => Trilha, Trilha => Trilha.id)
    trilha: Trilha[];
    
    @ManyToOne(() => Usuario, Usuario => Usuario.id)
    usuario: Usuario[];


}