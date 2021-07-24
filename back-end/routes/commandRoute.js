const express = require('express')
const router = express.Router()
//command_controller
const command = require('../controller/commandController')

//get_AllCommands
router.get('/getAllCommands',command.getAllCommands)

//update_command
router.put('updateCommand',command.updateCommand)

//delete_command
router.delete('/deleteCommand',command.deleteCommand)

//add_command
router.post('/addCommand',command.addCommand)

//get_command
router.get('/:id/getCommand',command.getCommand)


module.exports = router