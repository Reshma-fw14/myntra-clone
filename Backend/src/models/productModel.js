const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    brand:{type:String},
    description:{type:String},
    price:{type:String},
    strikeOff_price:{type:String},
    type:{type:String},
    offer:{type:String},
    gender:{type:String},
    image:[{type:String}]
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model('product', productSchema)