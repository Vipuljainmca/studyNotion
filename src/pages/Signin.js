import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import signup from "../assets/signup.png";
import frame from "../assets/frame.png";
import "./signin.css";
import { useNavigate } from "react-router-dom";

const Signin = (props) => {
  const navigate = useNavigate();
  const [ ishide1, setIsHide1] = useState(true)
  const [ ishide2, setIsHide2] = useState(true)
  const [ btnActive, setBtnActive] = useState(true)

  function activeHandlerTrue(){
    setBtnActive(true)
  }

  function activeHandlerFalse(){
    setBtnActive(false)
  }

  let type1 



  type1 = ishide1 ? 'password' : 'text'; 

  let type2
  type2 = ishide2 ? 'password' : 'text';

  let isLogin = props.isLogin
  let loginChangeHandler = props.set

  function hide1Handler(){
    setIsHide1(!ishide1)

  }

  function hide2Handler(){
    setIsHide2(!ishide2)
    
  }

  function summitHandler(event){

    navigate("/dashboard")
    loginChangeHandler(!isLogin)
  
  }
  return (
    <div className="signin-page">
      <div className="form-sec">
        <div className="dec">
          <h1>Join the millions learning to code with StudyNotion for free</h1>
          <p>
            Build skills for today, tomorrow, and beyond.<span>  Education to
            future-proof your career.</span>
          </p>
        </div>

        <form onSubmit={summitHandler}>
          <div className="two-btn">
            <button className={btnActive ? "active" : "inactive"} onClick={activeHandlerTrue}>Student</button>
            <button className={!btnActive ? "active" : "inactive"}onClick={activeHandlerFalse}>Instructor</button>
          </div>

          <div className="first-last">
            <div className="first">
              <label>
                First Name
                <span>
                  <sup>*</sup>
                </span>
              </label>
              <input placeholder="Enter First Name" required/>
            </div>

            <div className="last">
              <label>
                Last Name
                <span>
                  <sup>*</sup>
                </span>
              </label>
              <input placeholder="Enter last Name" required />
            </div>
          </div>

          <div className="email">
            <label>
              Email Address
              <span>
                <sup>*</sup>
              </span>
            </label>
            <input placeholder="Enter your email address" required/>
          </div>

          <div className="pswd">
            <div className="cre-pswd">
              <label>
                Create password
                <span>
                  <sup>*</sup>
                </span>
              </label>
              <input placeholder="Enter password" type={type1} required/ >
              <span className="icon1" onClick={hide1Handler}> 
              {ishide1 && <IoEyeOutline />}
              {!ishide1 && <IoEyeOffOutline />}
              </span>
            </div>

            <div className="crf-pswd">
              <label>
                Confirm password
                <span>
                  <sup>*</sup>
                </span>
              </label>
              
              <input placeholder="Confirm password" type={type2} required  />
              <span className="icon2" onClick={hide2Handler}>
              {ishide2 && <IoEyeOutline />}
              {!ishide2 && <IoEyeOffOutline />}
              </span>
            </div>
          </div>

          <div >
            <button className="cre-acc" type="summit">Create Account</button>
          </div>

          <div className="line"></div>
          <span className="or">OR</span>

          <div >
            <button className="btn-goggles">
              <FcGoogle />
              Sign Up with Google
            </button>
          </div>
        </form>
      </div>

      <div>
        <div>
        
          <img className="frm" src={frame} alt="frame" />
          </div>
        <div>
          <img className="pic" src={signup} alt="signup" />
          </div>
      </div>
    </div>
  );
};

export default Signin;
