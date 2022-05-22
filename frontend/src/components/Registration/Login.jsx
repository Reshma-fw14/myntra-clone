import React from 'react';
import "./Signup.css"

export default function Login() {
  return (
    <div>
        <div className='sigup-container'>
           <div className='top-image'>
               <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg" alt="shopping" />
           </div><br />
           <div className='bottom-details'>
               <p className='signup-text'>Login</p>
               <label htmlFor="">Email</label>
               <input type="text" id="email" placeholder='enter Email'/><br /><br />
               <label htmlFor="">Password</label>
               <input type="text" id="password" placeholder='enter Password' /><br /><br />
               <button className='signup-btn'>Login</button><hr />
               <p>New to Myntra <span>SIGNUP</span></p>
           </div>
        </div>
    </div>
  )
}
