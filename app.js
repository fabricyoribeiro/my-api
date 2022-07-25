const express = require('express')
const app = express()

var cors = require('cors')

app.use(cors())

var produtos = [
  {
    id: 1,
    productName: 'CONTROLE GAMER PS3/PS2/PC',
    price: '30',
    image: 'https://i.postimg.cc/d1XWStfy/controle.jpg'
  },

  {
    id: 2,
    productName: 'Linha Intelbras',
    price: '5.50',
    image: 'https://i.postimg.cc/wv3fVswz/intelbras.jpg'
  },

  {
    id: 3,
    productName: 'Headset HP',
    price: '90000',
    image: 'https://i.postimg.cc/h4dMtnw2/headset.jpg'
  },

  {
    id: 4,
    productName: 'Linha Intelbras',
    price: '5.50',
    image: 'https://i.postimg.cc/wv3fVswz/intelbras.jpg'
  },

  {
    id: 5,
    productName: 'Headset HP',
    price: '90000',
    image: 'https://i.postimg.cc/h4dMtnw2/headset.jpg'
  },

  {
    id: 6,
    productName: 'Linha Intelbras',
    price: '5.50',
    image: 'https://i.postimg.cc/wv3fVswz/intelbras.jpg'
  },

  {
    id: 7,
    productName: 'Headset HP',
    price: '90000',
    image: 'https://i.postimg.cc/h4dMtnw2/headset.jpg'
  },
  {
    id: 8,
    productName: 'Linha Intelbras',
    price: '5.50',
    image: 'https://i.postimg.cc/wv3fVswz/intelbras.jpg'
  },

  {
    id: 9,
    productName: 'Headset HP',
    price: '90000',
    image: 'https://i.postimg.cc/h4dMtnw2/headset.jpg'
  },

  {
    id: 10,
    productName: 'Linha Intelbras',
    price: '5.50',
    image: 'https://i.postimg.cc/wv3fVswz/intelbras.jpg'
  }
]

app.get('/produtos', (req, res) => {
  res.json()
})

app.get('/clientes', (req, res) => {
  res.json({ nome: 'Fabricyo', cpf: 123 })
})

// const func = require('./main')

// function teste(){
//   let div = document.getElementById('descricao')
//   div.innerText = 'testee'
// }

app.get('/descricao-produto', (req, res) => {
  // console.log(id)
  // res.sendFile(__dirname + '/index.html')
  res.json(id)

})
var id
app.post('/send', (req, res)=>{
  id = req.body
  console.log(JSON.parse(id))
  res.send(JSON.parse(id))
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
