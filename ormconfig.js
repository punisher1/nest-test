require('dotenv').config();

module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.NESTTEST_DATABASE_HOST,
  port: 5432,
  username: process.env.NESTTEST_DATABASE_USERNAME,
  password: process.env.NESTTEST_DATABASE_PASSWORD,
  database: process.env.NESTTEST_DATABASE_NAME,
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: ['dist/**/*.entity.js'],
};
