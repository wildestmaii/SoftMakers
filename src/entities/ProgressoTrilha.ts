import { Entity, JoinColumn, ManyToOne, Column } from "typeorm";
import { Usuario } from "./Usuario";
import { Trilha } from "./Trilha";

@Entity('progresso_trilha')
export class ProgressoTrilha {
    @Column()
    modulo_id: number;

    @Column()
    usuario_id: number;

    @Column()
    modulo_trilha_id: number;

    @ManyToOne(() => Usuario, Usuario => Usuario.id)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario[];

    @ManyToOne(() => Trilha, Trilha => Trilha.id)
    @JoinColumn({name: 'Trilha_id'})
    trilha: Trilha[];
    

}