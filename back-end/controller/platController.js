const Plats = require("../models/platModel");

module.exports = {

    //add_plat

  addPlat: async (req, res) => {
    const nom_plat = req.body.nom_plat;
    const description = req.body.description;
    const prix = req.body.prix;
    try {
      plats = new Plats({
        nom_plat,
        description,
        prix,
      });
      await plats.save();
      res.json(plats);
    } catch (error) {
      console.log(error.message);
    }
  },

  //get_AllPlats

  getAllPlats: async (req, res) => {
    try {
      const plats = await Plats.find();
      res.json(plats);
    } catch (error) {
      console.log(error.message);
    }
  },

  //delete_plat

  deletePlat: async (req, res) => {
    try {
      const plats = await Plats.findByIdAndDelete(req.params.id);
      res.json(plats);
    } catch (error) {
      console.log(error.message);
    }
  },

  //update_plat

  updatePlat: async (req, res) => {
    try {
      const plats = Plats.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(plats);
    } catch (error) {
      console.log(error.message);
    }
  },
  getPlat: async (req, res) => {
    try {
      const plats = await Plats.findById(req.params.id);
      res.json(plats);
    } catch (error) {
      console.log(error.message);
    }
  }
};
