module.exports = {
  app: {
    /** set null if using http */
    httpsCert: '/home/ubuntu/traefik/cert/fullchain.pem',
    httpsKey: '/home/ubuntu/traefik/cert/privatekey.pem',
    // httpsKey: process.env.HTTPS_KEY && process.env.HTTPS_KEY !== '' ? process.env.HTTPS_KEY : null,
    // httpsCert: process.env.HTTPS_CERT && process.env.HTTPS_CERT !== '' ? process.env.HTTPS_CERT : null,
  },
  gundb: {
    port: 8778,
    fileName: 'db',
  },
}
