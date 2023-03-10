const express = require("express")

const router = express.Router()
const User = require("./userModel.js")


router.route('/').get((req,res)=>{
    res.render('home')
    
})

router.route('/create-name').post( async(req,res)=>{
    const name = req.body.name
    await User.create({name})

    res.redirect('/')
})

module.exports = router;