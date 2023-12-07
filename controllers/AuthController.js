const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res,next) =>{
    bcrypt.hash(req.body.password,10, function(err,hashedPassword){
        if(err){
            res.json({
                message:"Nje error ndodhi ne regjistrim"
            })
        }
        
        let user = new User({
            emri: req.body.emri,
            email: req.body.email,
            password: hashedPassword
        })

        user.save()
        .then(user =>{ 
            res.json({
                message:"Perdoruesi u shtua me sukses"
            })
        })
        .catch(error =>{
            res.json({
                message:"Ka ndodhur nje problem ne shtimin e perdoruesit"
            })
        })
    })
}

const login = (req,res,next) =>{
    var username = req.body.username
    var password = req.body.password    

    User.findOne({$or:[{emri:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err){
                    res.json({
                        error :err
                    })
                }
                if(result){
                    let token = jwt.sign({name:user.name},'sosiSekret')
                    res.json({
                        message: 'Login Succesful',
                        token
                    })
                }
                else{
                    res.json({
                        message: 'Passwordi nuk esht sakt'
                    })
                }
            })
        }else{
            res.json({
                message:'Nuk ekziston useri'
            })
        }
    })
}

module.exports = {
    register,login
}