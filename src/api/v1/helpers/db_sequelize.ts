import { Sequelize } from "sequelize";

/* 

const credentials = {
  host: "localhost",
  database: "webcloudet_dating_app_database",
  username: "postgres",
  password: "root"
} 

*/

const credentials = {
  host: "ziggy.db.elephantsql.com",
  database: "qwvlmuve",
  username: "qwvlmuve",
  password: "Q0igYPbgMEBQUx7oWFPU4yQrW2BiRifE"
}

const db = {
  instance: new Sequelize(credentials.database, credentials.username, credentials.password, {
    host: credentials.host,
    dialect: 'postgres',
    define: {
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  }),
}

export default db;