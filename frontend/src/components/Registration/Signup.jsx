import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { ActionCreators } from "../states/store/ActionCreator";

export default function Signup() {
  const nav = useNavigate();
  const diaspatch = useDispatch();
  const action = bindActionCreators(ActionCreators, diaspatch);
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handelChange(e) {
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  }
  function handelCleanUp() {
    setLoginData({
      name: "",
      email: "",
      password: "",
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
  function handelsubmit() {
    axios
      .post("http://localhost:4000/signUp", loginData)
      .then(({ data }) => {
        if (!data.status) {
          alert(data.message);

          handelCleanUp();
        } else {
          localStorage.clear("loginData")
          alert(data.message);
          handelCleanUp();
          nav("/user/login");
        }

        
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  }
  action.Track(false);
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
          <p className="signup-text">Signup</p>
          <label htmlFor="">Name</label>
          <input
            onChange={(e) => {
              handelChange(e);
            }}
            type="text"
            id="name"
            placeholder="enter Fullname"
          />
          <br />
          <br />
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => {
              handelChange(e);
            }}
            type="text"
            id="email"
            placeholder="enter Email"
          />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => {
              handelChange(e);
            }}
            type="text"
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
            Signup
          </button>
          <hr />
          <Link to={"/user/login"}>
            {" "}
            <p>
              Already have an account <span>LOGIN</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
