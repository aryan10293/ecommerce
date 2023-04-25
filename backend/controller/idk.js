const passport = require("passport");
const validator = require("validator");
//const User = require("../model/user");


module.exports = {
    checkUser: async (req,res) => {
        console.log(req)
        res.send({
            user: req.user
        })
    }
}