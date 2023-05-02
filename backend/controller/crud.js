const User = require("../model/user");


module.exports = {
    addWish: async (req,res) => {
        console.log(req.body)
        try {
            await User.findOneAndUpdate(
                {_id: req.user.id},
                {
                    $push: { wishlist: req.body },
                }
            )            
        } catch (error) {
            console.error(error)
        }
        console.log(req.user)
    }
}