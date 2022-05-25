import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export enum  BOARD_CATEGORY_ENUM {
    PROMOTION = '홍보게시판',
    FREE = '자유게시판',
    NOTICE = '공지사항',
    QUESTION = '질문게시판',
  }

@Entity()
export class Community {

    @PrimaryGeneratedColumn('uuid')
    id!:string;

    @Column({ type: 'enum', enum: BOARD_CATEGORY_ENUM })
    category!:BOARD_CATEGORY_ENUM

    @Column()
    title!:string

    @Column({ type: 'longtext' })
    content!:string

    @CreateDateColumn({type: 'timestamp'})
    createdAt!:Date

    @UpdateDateColumn({type: 'timestamp', nullable:true} )
    updatedAt!:Date

    @DeleteDateColumn({type: 'timestamp', nullable:true})
    deletedAt!:Date

}