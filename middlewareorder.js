const express = require('express')
const app = express()
// 3 1 2 4
app.use(middlewareThree)
app.use(middlewareOne)

app.get('/', middlewareTwo, middlewareFour, (req, res) => {
  console.log('Inside Home Page')
  res.send('Home Page')
})

function middlewareOne(req, res, next) {
  console.log('Middleware One')
  next()
}

function middlewareTwo(req, res, next) {
  console.log('Middleware Two')
  next()
}

function middlewareThree(req, res, next) {
  console.log('Middleware Three')
  next()
}

function middlewareFour(req, res, next) {
  console.log('Middleware Four')
  next()
}

app.listen(3000, () => console.log('Server Started'))