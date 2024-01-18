import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Modulo } from "./Modulo";
import { Trilha} from "./Trilha";

@Entity('modulos')
export class Modulos {

  @PrimaryColumn()
  trilha_id: number;

  @PrimaryColumn()
  modulo_id: number;

  @ManyToOne(() => Modulo, Modulo => Modulo.id)
  modulo: Modulo[];

  @ManyToOne(() => Trilha, Trilha => Trilha.id)
  trilhas: Trilha[];
}