import { Entity, Column, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Modulos } from "./Modulos";
import { IndicacaoTrilha } from "./IndicacaoTrilha";

@Entity('trilha')
export class Trilha {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', {length: 100, nullable: false})
  nome: string;

  @Column('json')
  descricao: object;

  @OneToMany(() => Modulos, Modulos => Modulos.modulo_id)
  @JoinColumn({name: 'modulo_id'})
  modulos: Modulos[];

  @OneToMany(() => IndicacaoTrilha, IndicacaoTrilha => IndicacaoTrilha.usuario_id)
  @JoinColumn({name: 'usuario_id'})
  indicacao: IndicacaoTrilha[];
}