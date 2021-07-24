const mongoose = require('mongoose')
const Schema = mongoose.Schema
const platSchema = new Schema({
    nom_plat:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required: true
    },
    prix:{
        type:String,
        required:true
    }
})

module.exports = plats = mongoose.model('plats',platSchema)