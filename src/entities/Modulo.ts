import { Entity, Column, OneToMany, JoinColumn, PrimaryGeneratedColumn, Generated } from "typeorm";
import { Modulos } from "./Modulos";
import { Aulas } from "./Aulas";

@Entity('modulo')
export class Modulo {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({unique: true, nullable:false})
  nome: string;

  @Column('json')
  descricao: object;

  @OneToMany(() => Modulos, Modulos => Modulos.trilha_id)
  @JoinColumn({name: 'trilha_id'})
  modulos: Modulos[];

  @OneToMany(() => Aulas, Aulas => Aulas.aula_id)
  @JoinColumn({name: 'aula_id'})
  aulas: Aulas[];
}