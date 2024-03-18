const jsonServer  = require('json-server')
const server      = jsonServer.create()
const router      = jsonServer.router(require('./db.js')())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = 8080;
const URL_BASE_PATH =  `http://localhost:${PORT}`;

server.listen(8080, function () {
  console.log(`JSON Server is running at port ${PORT}`)
  console.log(`Users can be accessed via ${URL_BASE_PATH}/users`)
  console.log(`Ads can be accessed via ${URL_BASE_PATH}/ads`)
  console.log('')
  console.log('You are using a fake rest server that provides features like filtering, pagination and full-text search. Checkout https://www.npmjs.com/package/json-server')
  console.log('')
  console.log('Standard rest endpoints are available and can be used:')
  console.log(`    Get details of a specific ad: ${URL_BASE_PATH}/ads/1`)
  console.log(`    Full text search: ${URL_BASE_PATH}/ads?q=Description`)
})
