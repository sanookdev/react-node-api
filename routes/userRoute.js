const express = require('express')
const router = express.Router();

const userController = require('../controller/userController')

router.get('/',userController.list)
router.get('/:username',userController.list_one)
router.post('/',userController.store)
router.put('/:username',userController.put)
router.delete('/:username',userController.delete)



module.exports = router
