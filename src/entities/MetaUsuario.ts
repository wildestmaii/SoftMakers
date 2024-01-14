import { Column, Entity, OneToMany, JoinColumn } from "typeorm";
import { Usuario } from "./Usuario";


@Entity('meta_usuario')
export class MetaUsuario {
    @Column()
    usuario_id: number;

    @Column('json')
    meta: object;

    @OneToMany(() => Usuario, Usuario => Usuario.id)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario[];

}