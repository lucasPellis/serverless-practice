const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.get('/usuarios', (req, res) => {
  res.send([{ id: 1, name: 'chanchito feliz' }])
})

app.get('/productos', (req, res) => {
  res.send([{ id: 1, name: 'nintendo' }])
})

module.exports = app