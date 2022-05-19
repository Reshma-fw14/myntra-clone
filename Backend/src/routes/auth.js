const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { signUp, login } = require("../controllers/userController");
const Signup_middle = require("../middleware/signup");
const Login_middle = require("../middleware/login");

//siginUp route
router.post(
  "/signup",
  body("firstName")
    .isAlpha()
    .isLength({ min: 3 })
    .withMessage("First name must be of 3 letter"),
  body("lastName")
    .isLength({ min: 3 })
    .withMessage("Last name must be of 3 letter"),
  body("email")
    .isEmail()
    .withMessage("please enter valid email-mail")
    .isLength({ min: 6 })
    .withMessage("please enter valid email-mail length minimum of 6"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Please enter alphanumeric and special characters"),
  Signup_middle,
  signUp
);

//loging route
router.post(
  "/login",

  body("email")
    .isEmail()
    .withMessage("please enter valid email-mail")
    .isLength({ min: 6 })
    .withMessage("please enter valid email-mail length minimum of 6"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Please enter alphanumeric and special characters"),
  Login_middle,
  login
);

module.exports = router;