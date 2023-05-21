const express = require('express')
const app = express()

// 1 app.use(loggingMiddleware)
//app.use(loggingMiddleware2)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.use(loggingMiddleware2)

app.get('/users', (req, res) => {
  res.send('Users Page')
})

function loggingMiddleware(req, res, next) {
  console.log('Inside Middleware')
  // 2 next()
   next()
}
function loggingMiddleware2(req, res, next) {
  console.log('Inside Middleware2')
  // 2 next()
   next()
}

app.listen(3000, () => console.log('Server Started'))