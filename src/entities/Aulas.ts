import { Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Modulo } from "./Modulo";
import { Aula } from "./Aula";

@Entity('aulas')
export class Aulas {

  @PrimaryColumn()
  modulo_id: number;

  @PrimaryColumn()
  aula_id: number;

  @ManyToOne(() => Aula, aula => aula.id)
  aula: Aula[];

  @ManyToOne(() => Modulo, modulo => modulo.id)
  modulo: Modulo[];
}