import React, { useState } from "react";
import { ReactComponent as DomainField } from "../../assets/images/domainName.svg";
import { ReactComponent as Spliter } from "../../assets/images/spliter.svg";
import { ReactComponent as Google } from "../../assets/images/google.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook.svg";
import { ReactComponent as Apple } from "../../assets/images/apple.svg";
import { ReactComponent as Verified } from "../../assets/images/Verified.svg";
import { useNavigate } from "react-router-dom";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import axios from "axios";
import { environment } from "../../environments/environment";
import "./signupForm.scss";
import { useEffect } from "react";
import { AlertMessage } from "../alertMessage/AlertMessage";

const SignupForm = () => {
  const navigate = useNavigate();

  const apiBaseUrl = environment.apiBaseUrl;
  const client_id = environment.client_id;

  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isPhoneValidated, setIsPhoneValidated] = useState(false);

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
    setIsPhoneValidated(false);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumberInput = e.target.value;
    const phoneNumberValidated = phoneNumberInput.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(phoneNumberValidated);
    setIsPhoneValidated(false);
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
    if (
      fullName &&
      countryCode &&
      phoneNumber &&
      email &&
      password &&
      isPhoneValidated
    ) {
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

      navigate("/signup/email-verify");
    } else {
      if (!isPhoneValidated) alert("Plese verify your phone first");
      else alert("Fill in all the information!");
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

  const handlePhoneNumberBlur = () => {
    const completePhoneNumber = `${countryCode}${phoneNumber}`;
    if (
      completePhoneNumber &&
      isValidPhoneNumber(completePhoneNumber) &&
      !isPhoneValidated
    ) {
      console.log("valid");
      setShowOtp(true);
      setAlertMessage("OTP sent to " + completePhoneNumber);
      setTimeout(() => {
        setAlertMessage(""); // Clear the alert message after 3 seconds
      }, 3000);
      /*axios.post(`${apiBaseUrl}/user/verify-otp`, otpCode).then((res) => {
                if (res.data.status === 'success') {
                    localStorage.clear()
                    
                    localStorage.setItem("phoneNumber", phoneNumber)
                    localStorage.setItem("isVerified", res.data.isVerified)
                    localStorage.setItem("otp", res.data.otp)

                } else {
                    alert(res.data.message)
                    console.log("message", res.data.message)
                }
            })*/
    } else {
      console.log("invalid");
    }
  };
  const handleOtpCodeChange = (e) => {
    const tmpCode = e.target.value;
    const validOtpCode = tmpCode.replace(/\D/g, "");

    setOtpCode(validOtpCode);
  };
  useEffect(() => {
    if (otpCode.length === 4) {
      //////////////verification part////////////////
      if (otpCode === "1241") {
        setAlertMessage("OTP validated");
        setOtpCode("");
        setTimeout(() => {
          setAlertMessage(""); // Clear the alert message after 3 seconds
        }, 3000);
        setShowOtp(false);
        setIsPhoneValidated(true);
      } else {
        setOtpError(true);
        setAlertMessage("OTP did not match");
        setTimeout(() => {
          setAlertMessage(""); // Clear the alert message after 3 seconds
        }, 3000);
      }
    } else {
      setOtpError(false);
    }
  }, [otpCode]);

  return (
    <div className="signupForm">
      <DomainField className="domain-field" />
      <h1>Sign Up</h1>

      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="custom-form">
            <div className="input-group">
              <div className="input-row">
                <div className="input-unit" style={{ marginRight: "40px" }}>
                  <label>
                    Phone Number
                    <div
                      className="verified"
                      style={
                        isPhoneValidated === true ? null : { display: "none" }
                      }
                    >
                      <Verified />
                    </div>
                  </label>
                  <div className="phone-number">
                    <input
                      type="text"
                      placeholder="+91"
                      style={{
                        width: "45px",
                        marginRight: "8px",
                        padding: "4px",
                      }}
                      value={countryCode}
                      onChange={handleCountryCodeChange}
                    ></input>
                    <input
                      type="text"
                      placeholder="8200490767"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      onBlur={handlePhoneNumberBlur}
                    ></input>
                  </div>
                </div>

                <div
                  className="input-unit"
                  style={showOtp ? null : { display: "none" }}
                >
                  <label>OTP</label>
                  <input
                    type="text"
                    placeholder=""
                    value={otpCode}
                    onChange={handleOtpCodeChange}
                    maxLength="4"
                    style={otpError ? { border: "1px solid #FF5B5B" } : null}
                  ></input>
                </div>

                <div
                  className="input-unit"
                  style={showOtp ? { display: "none" } : null}
                >
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="XYZ45@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                  ></input>
                </div>
              </div>
              <div
                className="input-row"
                style={showOtp ? null : { display: "none" }}
              >
                <div className="input-unit" style={{ marginRight: "40px" }}>
                  <span>Did not receive OTP?</span>
                  <a>Recend OTP</a>
                </div>
                <div className="input-unit">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="XYZ45@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                  ></input>
                </div>
              </div>
              <div className="input-row">
                <div className="input-unit" style={{ marginRight: "40px" }}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Nandip Vaghaslya"
                    value={fullName}
                    onChange={handleFullNameChange}
                  ></input>
                </div>
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
              <button type="submit">Sign up</button>
            </div>
          </div>
          <div
            className="form-spliter"
            style={showOtp ? { margin: "30px 0" } : null}
          >
            <Spliter className="spliter" />
            Or sign up with
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
            Already have an account?{" "}
            <a
              onClick={() => {
                navigate("/login");
              }}
              style={{ cursor: "pointer" }}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>

      <div className="alert-message">
        {alertMessage && <AlertMessage message={alertMessage} />}
      </div>
    </div>
  );
};

export default SignupForm;
