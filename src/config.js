export default {
  port: 3001,
  app: process.env.APP_URL || 'https://',
  mongoURI: 'mongodb://mongo:27017/demo',
}
