const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const route = express.Router();

route.post("/signUp", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let oldUser = await User.findOne({ email }).lean().exec();

    if (oldUser)
      return res
        .status(400)
        .json({ message: "user already exist ", status: false });

    const hash = bcrypt.hashSync(password, 8);
    await User.create({ fullName:name, email, password: hash });

    return res.status(200).json({message:"signedUp successfully",status:true})
  } catch (e) {
    return res.status(200).json({ message: "error in sign up",status:false });
  }
});


module.exports=route;