import React from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import lognin from "../assets/login.png";
import frame from "../assets/frame.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let isLogin = props.isLogin
  let loginChangeHandler = props.set

  let navigate = useNavigate()
  const [isHide, updateHide] = useState(true);

  const [textType, setTextType] = useState("password");

  function passTextHandler() {
    if (isHide == true) {
      setTextType("text");
    } else {
      setTextType("password");
    }
    console.log(isHide);
    console.log(textType);
  }

  function hideButtonHandler() {
    updateHide(!isHide);
    passTextHandler();
  }

  function summitHandler(event){
    event.preventDefault()
    navigate("/dashboard")
    loginChangeHandler(!isLogin)



  }

  return (
    <div className="login">
      <div className="form-data">
        <form onSubmit={summitHandler}>
          <div className="desc">
            <h1>Welcome Back</h1>
            <p>
              Build skills for today, tomorrow, and beyond.
               <span>Education<br/>
                 to future-proof your career.</span>
            </p>
          </div>

          <div>
            <div className="lbl">
              <label>
                Email Address
                <span>
                  <sup>*</sup>
                </span>
              </label>
            </div>

            <div className="ipt">
            <input type="email" required placeholder="Enter your email address" />
            </div>

            <div className="lbl">
            <label>password <span>
              <sup>*</sup>
            </span></label>
            </div>

            <div className="ipt">
            <input type={textType} required placeholder="Enter password" />
            </div>

            <div className="hide">
            {isHide && <IoEyeOutline onClick={hideButtonHandler} />}
            {!isHide && <IoEyeOffOutline onClick={hideButtonHandler} />}
            </div>

            <span className="forpass">Forget password</span>

            <div>
              <button className="btn"  type="summit">Sign in</button>
            </div>
            <div className="line"></div>
            <span className="or">OR</span>
          </div>
          <div>
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
          <img className="pic" src={lognin} alt="lognin" />
        </div>

        
      </div>
    </div>
  );
};

export default Login;
