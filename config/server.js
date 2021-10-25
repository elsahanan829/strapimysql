module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 2336),
  url: env('URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET')
    }
  }
})
