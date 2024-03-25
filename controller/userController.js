const userModel = require('../model/userModel')

exports.list =(async(req,res)=>{
    try {
        const users = await userModel.find({}).exec()
        if(users){
            res.json({status : "ok",result:users})
        }else{
            res.status(404).json({status : "False", message : 'Users is empty'})
        }
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
})
exports.list_one =(async(req,res)=>{
    try {
        const result = await userModel.find({Username:req.params.username}).exec()
        if(result.length > 0){
            res.json({status : "ok",result:result})
        }else{
            res.status(404).json({status : "False", message : 'User not found.'})
        }
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
})
exports.store =(async(req,res)=>{
    try {
        const result = await userModel(req.body).save()
        if(result){
            res.json({status : "ok",result:result})
        }else{
            res.status(404).json({status : "False", message : 'Cannot insert user to database !'})
        }
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
})
exports.put =(async(req,res)=>{
    try {
        // res.send('put function of user')
        let user = req.body
        let username = req.params.username

        const result = await userModel.findOneAndUpdate({Username:username},user,{new:true}).exec()

        if(result){
            res.json({status : "ok",result:result})
        }else{
            res.status(404).json({status : "False", message : 'User not found.'})
        }

    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
})
exports.delete=( async(req,res)=>{
    try {
        let username = req.params.username
        const result = await userModel.findOneAndDelete({Username:username}).exec()
        if(result){
            res.json({status : 'ok',message:`${username} has been deleted.`})
        }else{
            res.status(404).json({status : "False", message : 'User not found.'})
        }
    } catch (error) {
        res.status(500).send('Something went wrong!')
        
    }
})