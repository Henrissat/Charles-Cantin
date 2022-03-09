const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

// postgres://pqropjotndlgey:0e116959ddcc2369eab5db7440852924696fb19b3696bcc65b50a34fe14b017c@ec2-3-232-22-121.compute-1.amazonaws.com:5432/d1qjf3rop0kdci