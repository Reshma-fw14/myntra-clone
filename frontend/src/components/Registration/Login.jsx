import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

import { ActionCreators } from "../states/store/ActionCreator";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";


export default function Login() {
  const nav = useNavigate();
  const diaspatch = useDispatch();
  const action = bindActionCreators(ActionCreators, diaspatch);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function cleanUpData(){
    setLoginData({
      email: "",
      password: "",
    });

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }

  function handelchange(e) {
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  }
  function handelsubmit() {
    axios
      .post("http://localhost:4000/signin", loginData)
      .then(({ data }) => {
        
        if(!data.status){
          console.log(data)
          cleanUpData();
          alert(data.message)
        }
        else{
          cleanUpData();
          localStorage.setItem("loginData", JSON.stringify(data));
          action.LoginAction({ ...data });
          window.location.href = "/";
         
        }
        

      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  }
  return (
    <div>
      <div className="sigup-container">
        <div className="top-image">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg"
            alt="shopping"
          />
        </div>
        <br />
        <div className="bottom-details">
          <p className="signup-text">Login</p>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              handelchange(e);
            }}
            type="text"
            name="email"
            id="email"
            placeholder="enter Email"
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              handelchange(e);
            }}
            type="text"
            name="password"
            id="password"
            placeholder="enter Password"
          />
          <br />
          <br />
          <button
            className="signup-btn"
            onClick={() => {
              handelsubmit();
            }}
          >
            Login
          </button>
          <hr />
          <Link to={"/user/signup"}>
            {" "}
            <p>
              New to Myntra <span>SIGNUP</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
