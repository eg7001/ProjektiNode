const Produkt = require('../models/Produkt')

// tregon listen e produktetve
const index = (req,res,next) =>{
    Produkt.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message: "Ka ndodhur nje error"
        })
    })
}

const show = (req,res,next) => {
    let produktID = req.body.produktID
    Produkt.findById(produktID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message: "Ka ndodhur nje error "
        })
    })
}

const store = (req,res,next) =>{
    let produkt = new Produkt({
            emri: req.body.emri,
            permbajtja: req.body.permbajtja,
            kategoria: req.body.kategoria,
            qmimi: req.body.qmimi
    })

    produkt.save()
    .then(response =>{
        res.json({
            message: "Produkti u shtua me sukses"
        })
    })
    .catch(errir =>{
            message: "Ka ndodhur nje error ne futjen e produktit"
    })
}

// me update nje produkt
const update = (req,res,next) =>{
    let produktID = req.body.produktID

    let newData = {
        emri: req.body.emri,
        permbajtja: req.body.permbajtja,
        kategoria: req.body.kategoria,
        qmimi: req.body.qmimi
    }

    Produkt.findByIdAndUpdate(produktID, newData)
    .then(() =>{
        res.json({
            message:"Produkti u ndryshua me sukses"
        })
    })
    .catch(errir =>{
        res.json({
            message:"Ndodhi nje gabim ne ndryshimin e produktit"
        })
    })
}

// me delete nje produkt
const destroy = (req,res,next) => {
    let produktID = req.body.produktID
    Produkt.findOneAndDelete(produktID)
    .then(() =>{
        res.json({
            message: "Produkti u fshi me sukses"
        })
    })
    .catch(error =>{
        res.json({
            message: "Ndodhi nje problem ne fshirje"
        })
    })
}

module.exports = {
    index,show,store,update,destroy
}