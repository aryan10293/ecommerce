const User = require("../model/user");
const nodemailer = require("nodemailer");

module.exports = {
    addWish: async (req,res) => {
        console.log(req.params.id)
        try {
            await User.findOneAndUpdate(
                {_id: req.params.id},
                {
                    $push: { wishlist: req.body },
                }
            )            
        } catch (error) {
            console.error(error)
        }
    },
        deleteWish: async (req,res) => {
        console.log('delete has started ',req.params.id)
        try {
            await User.findOneAndUpdate(
                {_id: req.params.id},
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
            {_id: req.params.id},
            {
                $push: { cart: req.body },
            }
        )   
        return res.status(200).json('cart updated')         
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
           let cool =  await User.find({_id: req.params.id})   
           res.send(cool[0].wishlist)         
        } catch (error) {
            console.error(error)
        }
    },
    getCart: async (req,res) => {
        try {
           let cool =  await User.find({_id: req.params.id})  
           console.log(cool, 'coool beans') 
           //res.send(cool[0].cart)         
        } catch (error) {
            console.error(error)
        }
    },
    confirmOrder: async (req,res) => { 
let htmlContent = `
  <main style="background-color: #ffffff; padding: 4rem 1rem 6rem; text-align: center; max-width: 48rem; margin: 0 auto;">
    <div style="max-width: 42rem; margin: 0 auto;">
      <div style="max-width: 36rem;">
        <h1 style="font-size: 1.25rem; font-weight: 500; color: #4f46e5;">Thank you!</h1>
        <p style="margin-top: 0.5rem; font-size: 2.5rem; font-weight: bold; letter-spacing: -0.05em;">It's on the way!</p>
        <p style="margin-top: 0.5rem; font-size: 1rem; color: #6b7280;">Your order #${req.body.randomSmallNumber} has shipped and will be with you soon.</p>

        <dl style="margin-top: 3rem; font-size: 0.875rem; font-weight: 500;">
          <dt style="color: #111827;">Tracking number</dt>
          <dd style="margin-top: 0.5rem; color: #4f46e5;">${req.body.randomNumber}<dd>
        </dl>
      </div>

      <section style="margin-top: 6rem; border-top: 1px solid #e5e7eb;">
        <h2 id="order-heading" style="font-size: 0; position: absolute;">Your order</h2>

        <h3 style="font-size: 0; position: absolute;">Items</h3>

        ${req.body.cart.map(item => `
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e5e7eb; padding-bottom: 2.5rem;">
            <img src="${item.img}" alt="${item.item}" style="height: 5rem; width: 5rem; flex-shrink: 0; border-radius: 0.375rem; background-color: #f3f4f6; object-fit: cover; object-position: center; margin-right: 1.5rem;">
            <div style="flex: 1; display: flex; flex-direction: column;">
              <div>
                <h4 style="font-weight: 500; color: #111827;">${item.item}</h4>
              </div>
              <div style="margin-top: 1.5rem; flex: 1; display: flex; align-items: flex-end;">
                <dl style="display: flex; gap: 1rem; border-right: 1px solid #e5e7eb; padding-right: 1rem;">
                  <div style="display: flex;">
                    <dt style="font-weight: 500; color: #111827;">Quantity</dt>
                    <dd style="margin-left: 0.5rem; color: #6b7280;">1</dd>
                  </div>
                  <div style="display: flex; padding-left: 1rem;">
                    <dt style="font-weight: 500; color: #111827;">Price</dt>
                    <dd style="margin-left: 0.5rem; color: #6b7280;">${item.price}.00</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        `)}
        </section>
      </div>
    </main>  `

       try {
            const updateUser = await User.findOneAndUpdate(
                {_id: req.body.user.userId},
                {$push: { orderHistory: [req.body.cart]}},
                {new:true}
            ) 
            
            let transporter = nodemailer.createTransport({
                service: "hotmail",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "therandomshop12345@outlook.com", // generated ethereal user
                    pass: "Shoepalace1245", // generated ethereal password
                },
        });

          let info = await transporter.sendMail({
            from: 'therandomshop12345@outlook.com', // sender address
            to: "aondrejryan11@gmail.com", // list of receivers
            subject: "order confirmation", // Subject line
            text: "Hello world?", // plain text body
            html: htmlContent 
        })
        console.log("Message sent: %s", info.messageId);
        if (!updateUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json(updateUser.orderHistory);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}