const express = require('express')
const router = express.Router()
const {userValidation} = require('../models/UserData')     
const userController = require('../controllers/userController')


router.post('/registerUser',[userValidation],userController.userRegister)





module.exports = router