const path = require('path');


module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/node_jobs_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
  test: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/node_jobs_test',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },

};
