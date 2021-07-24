const Commands = require("../models/commandModel");

module.exports = {

    //add_ command

  addCommand: async (req, res) => {
    const id_user = req.body.id_user;
    const id_plat = req.body.id_plat;
    const quantité = req.body.quantité;
    const prix = req.body.prix;
    try {
      commands = new Commands({
        id_user,
        id_plat,
        quantité,
        prix,
      });
      await commands.save();
      res.json(commands);
    } catch (error) {
      console.log(error.message);
    }
  },

  //get_command

  getAllCommands: async (req, res) => {
    try {
      const commands = await Commands.find();
      res.json(commands);
    } catch (error) {
      console.log(error.message);
    }
  },

//delete_command

  deleteCommand: async (req, res) => {
    try {
      const commands = await Commands.findByIdAndDelete(req.params.id);
      res.json(commands);
    } catch (error) {
      console.log(error.message);
    }
  },

  //update_command

  updateCommand: async (req, res) => {
    try {
      const commands = Commands.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(commands);
    } catch (error) {
      console.log(error.message);
    }
  },

  
  getCommand: async (req, res) => {
    try {
      const commands = await Commands.findById(req.params.id);
      res.json(commands);
    } catch (error) {
      console.log(error.message);
    }
  }
};
