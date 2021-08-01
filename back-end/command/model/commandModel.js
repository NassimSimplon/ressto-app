const mongoose = require('mongoose')
const Schema = mongoose.Schema


module.exports = mongoose.model('commands',new Schema({
    platId :{
        type:mongoose.Types.ObjectId,
        required: true
    },
    telephone :{
        type:String,
        required: true
    }
    
    }))
