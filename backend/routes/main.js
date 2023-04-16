const express = require("express");
const router = express.Router();
const authController = require("../controller/auth")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.post('/createaccount', authController.postCreateAccount)
router.post('/login', authController.postLogin)
router.get("/logout", authController.logout)
module.exports = router;