import { createConnection, getConnection } from 'typeorm';

const connection = {
  async create(connectionName) {
    await createConnection({
      name: connectionName,
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: process.env.TYPEORM_SYNCHRONIZE,
      logging: process.env.TYPEORM_LOGGING,
      entities: [process.env.TYPEORM_ENTITIES],
    });

    return getConnection(connectionName);
  },
};

export default connection;
