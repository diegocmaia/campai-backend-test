const env = process.env.NODE_ENV || 'local'
const envConfig = require(`./env/${env}`).default

export default envConfig
