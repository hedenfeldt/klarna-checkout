import express from 'express';
const app = express();
import { createOrder } from './klarna.js'
import { config } from 'dotenv';
config()

const products = [
    { id: "1", price: 57, name: 'House'},
    { id: "2", price: 10, name: 'glass'},
    { id: "3", price: 25, name: 'horse'},
]

app.get('/', (req,res) => {
    res.send(products.map((product) => `<a href="/p/${product.id}">${product.name}</a>`).join(''))
})

app.get('/p/:id', async (req,res)=>{
    const product = products.find((product) => product.id === req.params.id)
    const data = await createOrder(product)
    res.send(data.html_snippet)
})

app.listen(3000)