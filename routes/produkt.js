const express = require('express')
const router = express.Router()

const ProduktCOntroller = require('../controllers/ProduktController')
const authenticate = require('../middleware/authenticate')


router.get('/',authenticate,ProduktCOntroller.index)
router.post('/show',authenticate,ProduktCOntroller.show)
router.post('/store',authenticate,ProduktCOntroller.store)
router.post('/update',authenticate,ProduktCOntroller.update)
router.post('/delete',authenticate,ProduktCOntroller.destroy)

module.exports = router