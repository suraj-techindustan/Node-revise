const asyncMiddleWare = require('../middlewares/async')
const {User} = require('../models/UserData')


exports.userRegister = asyncMiddleWare(async(req,res)=>{

const {name='' , email='' , password=''} = req.body

if(!name || !email || !password ) return res.status(400).send({message :"Please Enter All Fields .."})

const values = new User({
    name,
    email,
    password
})

await values.save()

res.status(200).send({message : 'User Created ' , value: {name , email}})


})