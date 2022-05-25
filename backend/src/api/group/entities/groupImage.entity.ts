import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Group } from '../entities/group.entity';

@Entity()
export class GroupImage{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @JoinColumn()
    @ManyToOne(()=> Group)
    groupId!:Group;

    @Column()
    groupImageUrl?:string;
}