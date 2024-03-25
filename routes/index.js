const express = require('express');
const router = express.Router();

router.use('/users',require('./userRoute'))


router.get('/',(req,res)=>{
    res.json('index route')
})

module.exports = router