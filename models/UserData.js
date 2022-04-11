const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema  = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},

})

const User = mongoose.model('Users',userSchema)

const joiValidation=(req,res,next)=>{

    const joiSchema = Joi.object({
        name : Joi.string().required(),
        email : Joi.string().email().required(),
        password : Joi.string().required(),


    }).validate(req.body)
     
    const {error} = joiSchema

    if(error){
        res.status(400).send({message : "Something Went Wrong" , value : error})
    }else{
        next()
    }



}


exports.joiValidation = joiValidation
exports.User = User