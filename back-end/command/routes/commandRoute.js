const express = require('express')
const router = express.Router()
 const commands = require('../controller/commandController');

 router.post('/addCommand',commands.addCommand)
 router.get('/getAllCommands',commands.getAllCommands)
 router.delete('/deleteCommand/:id',commands.deleteCommand)
 router.put('/updateCommand/:id',commands.updateCommands)
 router.get('/getCommand/:id',commands.getCommand)


 module.exports = router