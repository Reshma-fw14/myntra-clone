const user = require("../models/userModel");
require("dotenv").config();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  // console.log("hi");
  try {
    const hashPassword = bcrypt.hashSync(req.body.password, 8);

    let data = {
      fullName: `${req.body.firstName} ${req.body.lastName}`,
      email: req.body.email,

      token: "",

      password: hashPassword,
    };
    // console.log(data);
    await user.create(data);
    return res
      .status(200)
      .json({ status: true, message: "register  succesful", data });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "something wrong with server" });
  }
};

const login = async (req, res) => {
  try {
    const oldUser = await user.findOne({ email: req.body.email }).lean().exec();
    const token = jwt.sign({id:oldUser._id,email:oldUser.email}, 'shhhhh');
await user.findOneAndUpdate({email:req.body.email},{token});
    const update =await user.findOne({email:req.body.email}).lean().exec();
    return res.status(200).json({ message: "login succesfull",update });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "something wrong with server in controller",
      error: err,
    });
  }
};

module.exports = { signUp, login };
