module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c3125ddd70a32472fe22eb8d6485d906'),
  },
});
