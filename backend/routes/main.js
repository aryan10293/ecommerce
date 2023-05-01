const express = require("express");
const router = express.Router();
const authController = require("../controller/auth")
const crudController = require("../controller/crud")
const passport = require('passport')
const cors = require('cors')
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.post('/createaccount', authController.postCreateAccount)
router.post('/login', authController.postLogin)

router.get("/logout", authController.logout)
router.get("/idk", authController.checkUser)

router.put('/wish', crudController.addWish)
module.exports = router;