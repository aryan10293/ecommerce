const express = require("express");
const router = express.Router();
const authController = require("../controller/auth")
const crudController = require("../controller/crud")
const nodemailer = require("nodemailer");
const passport = require('passport')
const cors = require('cors')
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.post('/createaccount', authController.postCreateAccount)
router.post('/login', authController.postLogin)

router.get("/logout", authController.logout)
router.get("/idk", ensureAuth, authController.checkUser)
router.get('/wish', crudController.getWishList)
router.get('/cart', crudController.getCart)

router.put('/wish', crudController.addWish)
router.put('/cart', crudController.addCart)

router.post('/confirmorder', crudController.confirmOrder)
router.options('/deletecart', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.sendStatus(204); // Send a successful response with status code 204 (No Content)
})
router.delete('/deletecart', crudController.whyWontItWork)
router.delete('/wish', crudController.deleteWish)
module.exports = router;