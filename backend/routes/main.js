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
router.get("/getLoginUser/:id", authController.checkUser)
router.get('/wish/:id', crudController.getWishList)
router.get('/cart/:id', crudController.getCart)

router.put('/wish/:id', crudController.addWish)
router.put('/cart/:id', crudController.addCart)

router.post('/confirmorder/:id', crudController.confirmOrder)
router.options('/deletecart', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.sendStatus(204); // Send a successful response with status code 204 (No Content)
})
router.delete('/deletecart', crudController.whyWontItWork)
router.delete('/wish/:id', crudController.deleteWish)
module.exports = router;