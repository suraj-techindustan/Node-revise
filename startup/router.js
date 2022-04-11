const userRoutes = require('../routes/userRoutes')




module.exports = function(app){
    app.get('/',(req,res)=>{
        return res.status(200).send(`Your Welcome`)
    })
    app.use('/api/v1/user',userRoutes)
app.use('*',(req,res)=>{
    return res.status(400).send({message : "The route you are looking for doesn't exist."})
})

}