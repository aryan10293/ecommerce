const express = require("express");
const router = express.Router();
const authController = require("../controller/auth")
const passport = require('passport')
const cors = require('cors')
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.post('/createaccount', authController.postCreateAccount)
router.post('/login', authController.postLogin)
router.get("/logout", authController.logout)
// router.post('/createaccount', 
//   passport.authenticate('local', { 
//     failureRedirect: 'http://localhost:3000/signup',
//     successRedirect: 'http://localhost:3000/dashboard'
//  }), authController.postCreateAccount);
module.exports = router;