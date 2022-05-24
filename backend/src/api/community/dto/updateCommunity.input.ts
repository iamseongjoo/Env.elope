import { IsNotEmpty } from 'class-validator';
import { BOARD_CATEGORY_ENUM } from '../entities/community.entity';

export class updateCommunity {

    @IsNotEmpty()
    category?:BOARD_CATEGORY_ENUM;

    @IsNotEmpty()
    title?:string;
    
    @IsNotEmpty()
    content?:string
    
    @IsNotEmpty()
    updatedAt!:Date
}