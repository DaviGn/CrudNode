import {
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import Role from './Role';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 100,
        nullable: false,
    })
    name: string;

    @Column({
        length: 100,
        nullable: false,
    })
    email: string;

    @Column({
        length: 250,
        nullable: false,
    })
    @Exclude()
    password: string;

    // Chave estrangeira
    @ManyToOne(() => Role, {})
    @JoinColumn({
        name: 'roleid',
    })
    role: Role;

    @Column({
        type: 'uuid',
    })
    roleid: string;

    @Expose({ name: 'fotoUrl' })
    getFotoUrl() {
        return `http://localhost:3333/img/users/${this.id}.png`;
    }
}
