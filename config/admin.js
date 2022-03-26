module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7fa88b3b9cd40d56644230576211bc43'),
  },
});
