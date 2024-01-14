import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Aula } from "./Aula";
import { Usuario } from "./Usuario";

@Entity('progresso_trilha')
export class ProgressoTrilha {
    @PrimaryColumn()
    aula_id: number;

    @PrimaryColumn()
    usuario_id: number;

    @ManyToOne(() => Aula, Aula => Aula.id)
    aula: Aula[];

    @ManyToOne(() => Usuario, Usuario => Usuario.id)
    usuario: Usuario[];

}