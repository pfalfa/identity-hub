module.exports = {
  app: {
    port: 3000,
    storeName: 'pfalfa',
    sessionSecret: process.env.SESSION_SECRET || 'some-secret',
  },
  db: {
    peers: ['http://localhost:8765/gun'],
  },
  email: {
    host: process.env.EMAIL_HOST || null,
    username: process.env.EMAIL_USER || null,
    password: process.env.EMAIL_PASSWORD || null,
    port: 364,
  },
}
