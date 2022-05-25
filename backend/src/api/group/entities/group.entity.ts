import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum GROUP_POST_CHOICE_ENUM{
    PLOGGING = 'PLOGGING',
    PLOVING = 'PLOVING',
    PLOCLING = 'PLOCLING',
    VEGETARIAN = 'VEGETARIAN',
    ZEROWASTE = 'ZEROWASTE',
    REUSEABLE = 'REUSEABLE',
    SAVINGENERGY = 'SAVINGENERGY'
}

@Entity()
export class Group{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    groupPostTitle! : string;

    @Column({type:'enum', enum:GROUP_POST_CHOICE_ENUM})
    groupPostChoice!: GROUP_POST_CHOICE_ENUM;

    @Column()
    groupPostDate!: string;

    @Column()
    groupPostTime!: string;

    @Column()
    groupPostPlace!: string;

    @Column({default:1})
    groupPostNumber!: number;

    @Column()
    groupPostIntro!: string;

    @Column()
    groupPostItem!: string;

    @Column()
    groupPostMember!: string;
}