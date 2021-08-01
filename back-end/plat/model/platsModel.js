const mongoose = require('mongoose')
const Schema = mongoose.Schema


module.exports = mongoose.model('plats',new Schema({
    platName :{
        type:String 
    },
    platImage :{
        type:String 
    },
    description :{
        type:String 
    },
    prix :{
        type:String 
    }
    
    }))
