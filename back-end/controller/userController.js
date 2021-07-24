const Users = require("../models/userModel");

module.exports = {

    //add_user

  addUser: async (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const telephone = req.body.telephone;
    const email = req.body.email;
    const password = req.body.password;
    try {
      users = new Users({
        nom,
        prenom,
        telephone,
        email,
        password,
      });
      await users.save();
      res.json(users);
    } catch (error) {
      console.log(error.message);
    }
  },

  //get_AllUsers

  getAllUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (error) {
      console.log(error.message);
    }
  },

  //delete_user

  deleteUser: async (req, res) => {
    try {
      const users = await Users.findByIdAndDelete(req.params.id);
      res.json(users);
    } catch (error) {
      console.log(error.message);
    }
  },

  //update_user

  updateUser: async (req, res) => {
    try {
      const users = Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(users);
    } catch (error) {
      console.log(error.message);
    }
  },
  getUser: async (req, res) => {
    try {
      const users = await Users.findById(req.params.id)
      res.json(users);
    } catch (error) {
      console.log(error.message);
    }
  }
};
