import React, { useState } from "react";
import "./loginForm.scss";

import { ReactComponent as DomainField } from "../../assets/images/domainName.svg";
import { ReactComponent as Spliter } from "../../assets/images/spliter.svg";
import { ReactComponent as Google } from "../../assets/images/google.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook.svg";
import { ReactComponent as Apple } from "../../assets/images/apple.svg";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Layout from "../../components/layout/Layout";

import { environment } from "../../environments/environment";

const LoginForm = () => {
  const navigate = useNavigate();
  const apiBaseUrl = environment.apiBaseUrl;
  const client_id = environment.client_id;

  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    const countryCodeInput = e.target.value;
    let countryCodeValidated = countryCodeInput.replace(/\D/g, ""); // Remove non-digit characters

    // Add "+" sign if missing
    if (!countryCodeValidated.startsWith("+")) {
      countryCodeValidated = "+" + countryCodeValidated;
    }

    setCountryCode(countryCodeValidated);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumberInput = e.target.value;
    const phoneNumberValidated = phoneNumberInput.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(phoneNumberValidated);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic here
    if (fullName && countryCode && phoneNumber && email && password) {
      const completePhoneNumber = `${countryCode}${phoneNumber}`;

      // Send signup request to the server

      const user = {
        fullName,
        phoneNumber: completePhoneNumber,
        email,
        password,
      };

      /*axios.post(`${apiBaseUrl}/user`, user).then((res) => {
                if (res.data.status === 'success') {
                    localStorage.clear()
                    localStorage.setItem("access-token", res.data.accessJWT)
                    localStorage.setItem("refresh-token", res.data.refreshJWT)
                    localStorage.setItem("email", user.email)
                    localStorage.setItem("phoneNumber", user.phoneNumber)
                    localStorage.setItem("isVerified", res.data.isVerified)
                    navigate('/signup/otp')
                } else {
                    alert(res.data.message)
                    console.log("message", res.data.message)
                }
            })*/

      navigate("/signup/otp-verify");
    } else {
      alert("Fill in all the information!");
    }
  };

  const handleFacebookSignup = () => {
    console.log("google sign up");
  };

  const handleAppleSignup = () => {
    console.log("google sign up");
  };

  const handleGoogleSignup = () => {
    console.log("google sign up");
  };

  return (
    <div className="login-wrapper">
      <DomainField className="domain-field" />
      <h1>Log In</h1>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="custom-form">
            <div className="input-group">
              <div className="input-row">
                <div className="input-unit">
                  <label>Email or Phone number</label>
                  <input
                    type="email"
                    placeholder="hello@ishaare.com"
                    value={email}
                    onChange={handleEmailChange}
                  ></input>
                </div>
              </div>
              <div className="input-row">
                <div className="input-unit">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={handlePasswordChange}
                  ></input>
                  {password.length < 8 && <p>Must be at least 8 characters</p>}
                </div>
              </div>
            </div>
            <div className="signup-button">
              <button type="submit">Log In</button>
              <a onClick={() => navigate("/login/forgot-password")}>
                <u>Forgot Password?</u>
              </a>
            </div>
          </div>
          <div className="form-spliter">
            <Spliter className="spliter" />
            <p>Or log in with</p>
            <Spliter className="spliter" />
          </div>
        </form>
        <div className="social-form">
          <button className="social-button" onClick={handleGoogleSignup}>
            <span>
              <Google style={{ marginRight: "6px" }} />
              Google
            </span>
          </button>

          {/* <GoogleLogin
                        clientId={client_id}
                        render={renderProps => (
                            <button className='social-button myCustomButton' onClick={renderProps.onClick} disabled={renderProps.disabled} >
                                <span><Google style={{marginRight: "6px"}} />Google</span>
                            </button>
                            // <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="myCustomButton">
                            //     Google
                            // </button>
                        )}
                        buttonText="Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}

          <button className="social-button" onClick={handleFacebookSignup}>
            <span>
              <Facebook style={{ marginRight: "6px" }} />
              Facebook
            </span>
          </button>
          <button className="social-button" onClick={handleAppleSignup}>
            <span>
              <Apple style={{ marginRight: "6px" }} />
              Apple
            </span>
          </button>
          <div className="to-signin">
            Don't have an account?{" "}
            <a
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
