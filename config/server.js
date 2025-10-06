module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://code-lerner-strapi-backend-task-production.up.railway.app/'),
  proxy: env.bool('IS_PROXY', true),
  app: {
    keys: env.array('APP_KEYS'),
    proxy: true,
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
