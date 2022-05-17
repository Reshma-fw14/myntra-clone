const express=require('express');
const app=express();
app.use(express.json());

const connect=require("./src/configs/db")

const productController=require('./src/controllers/productController');

app.use('/fashion', productController)

const port=process.env.PORT || 4000
app.listen(port, async()=>{
    try{
        await connect();
        console.log(`Listening on port ${port}...`)
    }catch(e){
        console.log(e.message)
    }
})