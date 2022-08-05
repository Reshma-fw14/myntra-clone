const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const route = express.Router();

route.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  

  try {
    let oldUser = await User.findOne({ email }).lean().exec();
    
    
    if (!oldUser)
    return res
    .status(400)
    .json({ message: "email or password is incorrect", status: false });
    
    const comparePass = bcrypt.compareSync(password, oldUser.password);
    if (!comparePass)
    return res
    .status(400)
    .json({ message: "email or password is incorrect", status: false });
        const token=jwt.sign({id:oldUser._id,email:oldUser.email},"reshma_123")

        User.findOneAndUpdate({email},{token}); 
        let name=oldUser.fullName.split(" ")[0]
    return res
      .status(200)
      .json({  token,
      status: true,
      name});
  } catch (e) {
    return res.status(400).json({ message: "error in sign up",staus:false });
  }
});

module.exports = route;
