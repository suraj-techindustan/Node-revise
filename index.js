const express = require('express');
const app = express()
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT
const db = process.env.DB 
const mongoose  = require('mongoose');

app.use(express.json())


mongoose.connect(db,{}).then(console.log('conneted To Data Base'))
.catch(err=>{console.log('Failed TO Connect : ', err)})

require('./startup/router')(app)
// require('./startup/middleware')(app)


app.listen(port,()=>console.log(`Listening To Port : ${port}`))