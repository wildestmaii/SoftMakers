import { Entity, Column, OneToMany, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Modulo } from "./Modulo";
import { IndicacaoTrilha } from "./IndicacaoTrilha";

@Entity('trilha')
export class Trilha {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', {length: 100, nullable: false})
  nome: string;

  @Column('json')
  descricao: object;

  @OneToMany(() => Modulo, Modulo => Modulo.id)
  modulo: Modulo[];

  @ManyToOne(() => IndicacaoTrilha, IndicacaoTrilha => IndicacaoTrilha.usuario_id)
  //@JoinColumn({name: 'usuario_id'})
  indicacao: IndicacaoTrilha[];


}