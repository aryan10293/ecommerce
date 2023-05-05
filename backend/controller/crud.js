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
    },
        deleteWish: async (req,res) => {
        console.log('delete has started ')
        try {
            await User.findOneAndUpdate(
                {_id: req.user.id},
                {
                    $pull: { wishlist: req.body },
                }
            )            
        } catch (error) {
            console.error(error)
        }
    },
    addCart: async (req,res) => {
    try {
        await User.findOneAndUpdate(
            {_id: req.user.id},
            {
                $push: { cart: req.body },
            }
        )            
    } catch (error) {
        console.error(error)
    }
    },
    getWishList: async (req,res) => {
        try {
           let cool =  await User.find(req.user)   
           res.send(cool[0].wishlist)         
        } catch (error) {
            console.error(error)
        }
    }
}