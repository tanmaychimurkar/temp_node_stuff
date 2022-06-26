const express = require('express')
const app = express();
const {products} = require('./data.js')

const logger = require('./logger')
//req => middleware => res

app.use(logger)

app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})




app.listen(5000, ()=>{
    console.log('Listening on server 5000..')
})