//import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import style from './style';
import { useState } from "react";

function LoginUi() {
  const LoginUi = style();
  // console.log("main",mainstyle.mainstyle);
  // console.log("sumMain",sumMain.subMain);
  const [isHover, setHover] = useState(false);

  const handleEnterHover = () => {
    //console.log("hoevering!")
    setHover(true);
  }
  const handelLeaveHover = () => {
    setHover(false);
  }
  return (
    <div style={LoginUi.mainstyle}>
      <div style={LoginUi.subMain}>
        <div>
          <div style={LoginUi.imgs}>
            <div style={LoginUi.containerImage}>
              <img src={profile} alt="profile" style={LoginUi.profile} />
            </div>

          </div>
          <div>
            <h1>Login Page</h1>
            <div style={{ transform: isHover ? "translateY(-15px)" : "translate(0px)", transition: "all 0.3s" }} onMouseEnter={handleEnterHover} onMouseLeave={handelLeaveHover} >
              <img src={email} alt="email" style={LoginUi.email} />
              <input type="text" placeholder="user name" style={{ ...LoginUi.name, ...LoginUi.input }} />
            </div>
            <div style={{ ...LoginUi.secondInput, ...{ transform: isHover ? "translateY(-15px)" : "translate(0px)" } }} onMouseEnter={handleEnterHover} onMouseLeave={handelLeaveHover}>
              <img src={pass} alt="pass" style={LoginUi.email} />
              <input type="password" placeholder="user name" style={{ ...LoginUi.name, ...LoginUi.input, }} />
            </div>
            <div style={LoginUi.loginButton}>
              <button
                style={{ ...LoginUi.button,...{transform : isHover ? "translateY(-15px)" : "translate(0px)" }}}
                onMouseEnter={handleEnterHover} onMouseLeave={handelLeaveHover}
              >Login</button>
            </div>

            <p style={LoginUi.link}>
              <a href="#" style={{ color: "blue" }}>Forgot password ?</a> Or<a href="#" style={{ color: "blue" }}>Sign Up</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
