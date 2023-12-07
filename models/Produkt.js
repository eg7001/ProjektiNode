const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produktSchema = new Schema({
    emri:{
        type:String
    },
    permbajtja: {
        type: String
    },
    kategoria: {
        type: String
    },
    qmimi: {
        type: Number
    }
})

const Produkt = mongoose.model('Produkt', produktSchema)

module.exports = Produkt