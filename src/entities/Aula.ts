import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Aulas } from "./Aulas";
import { ProgressoTrilha } from "./ProgressoTrilha";

@Entity('aula')
export class Aula {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", {length: 30, nullable: false})
  nome: string;

  @Column('json')
  descricao: object;

  @Column("varchar", {length: 45, nullable: false})
  link_aula: string;

  @OneToMany(() => Aulas, Aulas => Aulas.modulo_id)
  @JoinColumn({name: "modulo_id"})
  aulas: Aulas[];

  @OneToMany(() => ProgressoTrilha, ProgressoTrilha => ProgressoTrilha.usuario_id)
  @JoinColumn({name: "usuario_id"})
  progressos: ProgressoTrilha[];
}


