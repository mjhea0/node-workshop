module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'node_jobs_dev'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'node_jobs_test'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

};
