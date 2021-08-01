const PLATS = require("../model/platsModel");
module.exports = {
  //add_fabrique

  addPlats: async (req, res) => {
    const platName = req.body.platName ;
    const platImage = req.body.platImage;
    const description = req.body.description
const prix = req.body.prix

 
    try {
      plats = new PLATS({
       platName,
       platImage,
       description,
       prix
      });
      await plats.save();
      res.json(plats);
    } catch (error) {
      console.error(error.message);
    }
  },
  getAllPlats: async (req, res) => {
    try {
      const plats = await PLATS.find();
      res.json(plats);
    } catch (error) {
      console.error(error.message);
    }
  },
  deletePlats: async (req, res) => {
    try {
      const plats = await PLATS.findByIdAndDelete(req.params.id);
      res.json(plats);
    } catch (error) {
      console.error(error.message);
    }
  },
  updatePlats: async (req, res) => {
    try {
      const plats = await PLATS.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(plats);
    } catch (error) {
      console.error(error.message);
    }
  },
  getPlat: async (req, res) => {
    try {
      const plats = await PLATS.findById(req.params.id);
      res.json(plats);
    } catch (error) {
      console.error(error.message);
    }
  }
};