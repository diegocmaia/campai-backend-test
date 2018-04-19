const env = process.env.NODE_ENV || 'local'
const envConfig = require(`./${env}/index`).default

export default envConfig
