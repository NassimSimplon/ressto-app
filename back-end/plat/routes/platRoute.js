const express = require('express')
const router = express.Router()
 const plats = require('../controller/platController');

 router.post('/addPlat',plats.addPlats)
 router.get('/getAllPlats',plats.getAllPlats)
 router.delete('/deletePlat/:id',plats.deletePlats)
 router.put('/updatePlat/:id',plats.updatePlats)
 router.get('/getPlat/:id',plats.getPlat)


 module.exports = router