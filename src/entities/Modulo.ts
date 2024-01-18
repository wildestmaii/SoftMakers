import { Entity, Column, OneToMany, JoinColumn, PrimaryGeneratedColumn, Generated } from "typeorm";
import { Trilha } from "./Trilha";

@Entity('modulo')
export class Modulo {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({unique: true, nullable:false, length: 30})
  nome: string;

  @Column('json')
  descricao: object;

  @Column()
  trilha_id: number;

  @OneToMany(() => Trilha, Trilha => Trilha.id)
  @JoinColumn({name: 'trilha_id'})
  trilha: Trilha[];


}