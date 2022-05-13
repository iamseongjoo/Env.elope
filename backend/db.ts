import { DataSource } from 'typeorm';

export const database = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [__dirname + '/apis/**/*.entity.*'],
    logging: true,
    synchronize: false,
})