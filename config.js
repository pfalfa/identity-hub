module.exports = {
  app: {
    httpsKey: process.env.HTTPS_KEY && process.env.HTTPS_KEY !== '' ? process.env.HTTPS_KEY : null,
    httpsCert: process.env.HTTPS_CERT && process.env.HTTPS_CERT !== '' ? process.env.HTTPS_CERT : null,
  },
  gundb: {
    port: 8778,
    fileName: 'db',
  },
}
