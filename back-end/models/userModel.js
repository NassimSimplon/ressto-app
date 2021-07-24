const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userShema = new Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports =  users = mongoose.model('users',userShema)