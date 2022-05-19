require("dotenv").config();
var cors = require('cors')
const express=require('express');
const app=express();

const connect=require("./src/configs/db");
// const stripe=require('./src/routes/stripe')
const auth=require("./src/routes/auth")
const productController=require('./src/controllers/productController');



app.use(express.json());
app.use(cors())



app.use('/fashion', productController)
// app.use('/api/stripe', stripe)

const port=process.env.PORT || 4000
app.listen(port, async()=>{
    try{
        await connect();
        console.log(`Listening on port ${port}...`)
    }catch(e){
        console.log(e.message)
    }
})