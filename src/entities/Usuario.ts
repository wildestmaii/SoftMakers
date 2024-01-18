import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { ProgressoTrilha } from "./ProgressoTrilha";
import { IndicacaoTrilha } from "./IndicacaoTrilha";
import { MetaUsuario } from "./MetaUsuario";
import { Avaliacao } from "./Avaliacao";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn("uuid")
    id: number;
  
    @Column("varchar", {length: 45, nullable:false})
    nome: string;
  
    @Column('varchar', {length: 30, unique: true, nullable: false})
    email: string;
  
    @Column('varchar', {length: 30, nullable: false})
    senha: string;
  
    @Column('varchar', {length: 15, nullable: false})
    tipo_usuario: string;
  
    @Column('varchar', {length: 45, nullable: true })
    habilidades: string;
  
    @Column('varchar', {length: 300, nullable: true})
    experiencia: string;

    @OneToMany(() => ProgressoTrilha, ProgressoTrilha => ProgressoTrilha.modulo_trilha_id)
    //@JoinColumn({name: "usuario_id"})
    progressos: ProgressoTrilha[];

    @OneToMany(() => MetaUsuario, MetaUsuario => MetaUsuario.meta)
    //@JoinColumn({name: "usuario_id"})
    meta: MetaUsuario[];

    @ManyToOne(() => IndicacaoTrilha, IndicacaoTrilha => IndicacaoTrilha.trilha_id)
    @JoinColumn({name: "usuario_id"})
    indicacao_trilha: IndicacaoTrilha[];

    @OneToMany(() => Avaliacao, Avaliacao => Avaliacao.dados)
    @JoinColumn({name: "usuario_id"})
    avaliacao: Avaliacao[];

}

