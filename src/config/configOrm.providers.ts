import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.HOST_DB,
        port: parseInt(process.env.PORT_DB, 10) || 5432,
        username: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.NAME_DB,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
