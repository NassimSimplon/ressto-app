const COMMANDS = require("../model/commandModel");
const mongoose = require('mongoose')
const axios = require('axios')
module.exports = {
  //add_commad

  addCommand: async (req, res) => {
    const platId = mongoose.Types.ObjectId(req.body.platId);
    const telephone = req.body.telephone;
 
    try {
      commands = new COMMANDS({
       platId,telephone
      });
      await commands.save();
      res.json(commands);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllCommands
  getAllCommands: async (req, res) => {
    try {
      const commands = await COMMANDS.find();
      res.json(commands);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteCommand
  deleteCommand: async (req, res) => {
    try {
      const commands = await COMMANDS.findByIdAndDelete(req.params.id);
      res.json(commands);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateCommands
  updateCommands: async (req, res) => {
    try {
      const commands = await COMMANDS.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(commands);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getCommand
  getCommand: async (req, res) => {
    try {
      const commands = await COMMANDS.findById(req.params.id).then(
          (COMMANDS)=>{
           axios.get('http://localhost:8080/plats/getplat/' + COMMANDS.platId
  ).then((response)=>{
      var commandObject= {platName: response.data.platName, platImage:response.data.platImage,prix:response.data.prix,telephone:COMMANDS.telephone}
      res.json(commandObject)
      })
          }
      )

     } catch (error) {
      console.error(error.message);
    }
  }
};