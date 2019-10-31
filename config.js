module.exports = {
  app: {
    httpsKey: process.env.HTTPS_KEY && process.env.HTTPS_KEY !== '' ? process.env.HTTPS_KEY : null,
    httpsCert: process.env.HTTPS_CERT && process.env.HTTPS_CERT !== '' ? process.env.HTTPS_CERT : null,
  },
  gundb: {
    port: 8765,
    fileName: 'db',
    // peers: ['http://localhost:8765/gun', 'http://ec2-18-136-211-116.ap-southeast-1.compute.amazonaws.com:8765/gun'],
  },
}
