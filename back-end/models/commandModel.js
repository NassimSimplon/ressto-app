const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commandSchema = new Schema({
    id_user:{
        type:String,
        required:true
    },
    id_plat:{
        type:String,
        required:true
    },
    quantité:{
        type:String,
        required:true
    },
    prix:{
        type:String,
        required:true
    }

})

module.exports = commands = mongoose.model('commands',commandSchema)