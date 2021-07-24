const express = require('express')
const router = express.Router();
//plat_Controller
const plat = require('../controller/platController')

//get_plat
router.get('/:id/getPlat',plat.getPlat)

//add_plat
router.post('/addPlat',plat.addPlat)

//update_plat
router.put('/updatePlat',plat.updatePlat)

//delete_plat
router.delete('/deletePlat',plat.deletePlat)

//get_AllPlats
router.get('/getAllPlats',plat.getAllPlats)



module.exports = router 