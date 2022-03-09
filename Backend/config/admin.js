module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd337e3f461527d09e7b8b49d59aef33c'),
  },
});
