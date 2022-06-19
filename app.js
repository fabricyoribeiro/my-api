
const express = require('express')
const app = express()

app.get('/produtos', (req, res) => {
  res.json({ nome: 'Notebook', preco: 1200})
})

app.get('/clientes', (req, res) => {
  res.json({ nome: 'Fabricyo', cpf: 123})
})

app.get('/', (req, res) => {
  res.json({
    msg: 'OK OK'
  })
})

const PORT = process.env.PORT || 8877

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`)
})