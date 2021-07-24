const express = require('express')
const router = express.Router()
//user_controller
const users = require('../controller/userController')

//get_AllUsers
router.get('/getAllUsers',users.getAllUsers)

//add_user
router.post('/addUser',users.addUser)

//delete_user
router.delete('/deleteUser',users.deleteUser)

//update_user
router.put('/updateUser',users.updateUser)

//get_user
router.get('/:id/getUser',users.getUser)

module.exports = router