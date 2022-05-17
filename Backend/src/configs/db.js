const mongoose=require('mongoose')

const connect=()=>{
  mongoose.connect("mongodb+srv://reshma:Reshma46@cluster0.glw68.mongodb.net/?retryWrites=true&w=majority")
}

module.exports=connect;