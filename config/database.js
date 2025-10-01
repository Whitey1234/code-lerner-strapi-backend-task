module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  return {
    connection: {
      client,
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false, // required for Railway PostgreSQL
        },
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
