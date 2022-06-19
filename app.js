// const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res) => {
  res.send({ nome: 'Notebook', preco: 1200})
})

app.get('/clientes', (req, res) => {
  res.send({ nome: 'Fabricyo', cpf: 123})
})

const PORT = process.env.PORT || 8877

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${porta}`)
})