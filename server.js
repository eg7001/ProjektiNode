const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')

const ProduktRouter=require('./routes/produkt')
const AuthRouter =require('./routes/auth')

mongoose.connect('mongodb://0.0.0.0:27017/projektDB', {useNewUrlParser: true, useUnifiedTopology: true}) 
const db = mongoose.connection

db.on('error', (err) =>{
    console.log(err)
})

db.once('open', () =>{
    console.log('Databaza u lidh ')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server eshte lshuar ne portin: ${PORT}`)
})

app.use('/api/produkts', ProduktRouter)
app.use('/api',AuthRouter)