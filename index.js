import express from 'express'
const app = express();

const products = [
    { id: 1, price: 57, name: 'House'},
    { id: 2, price: 10, name: 'glass'},
    { id: 3, price: 25, name: 'horse'},
]

app.get('/', (req,res) => {
    res.send(products.map((product) => `<a href="/p/${product.id}">${product.name}</a>`).join(''))
})


app.listen(3000)