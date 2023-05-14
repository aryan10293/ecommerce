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
        console.log('delete has started ',req.user)
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
    whyWontItWork: async (req,res) => {
        // console.log(req.body.product)
        // console.log(req.body.user.userId)
        try {
            const updateUser = await User.findOneAndUpdate(
                {_id: req.body.user.userId},
                {$pull: { cart: req.body.product }},
                {new:true}
            )   
            
        if (!updateUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json(updateUser.cart);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

    },
    getWishList: async (req,res) => {
        try {
           let cool =  await User.find(req.user)   
           res.send(cool[0].wishlist)         
        } catch (error) {
            console.error(error)
        }
    },
    getCart: async (req,res) => {
        try {
           let cool =  await User.find(req.user)   
           res.send(cool[0].cart)         
        } catch (error) {
            console.error(error)
        }
    }
}