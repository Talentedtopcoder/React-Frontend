import React, { useState } from "react";
import "./resetPasswordForm.scss";

import { ReactComponent as DomainField } from "../../assets/images/domainName.svg";
import { ReactComponent as ShowPassword } from "../../assets/images/show-password.svg";
import { ReactComponent as HidePassword } from "../../assets/images/hide-password.svg";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { environment } from "../../environments/environment";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const apiBaseUrl = environment.apiBaseUrl;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /////cjc-Show and Hide
  const [passwordType, setPasswordType] = useState("password"); //Showing newpassword
  const [confirmPasswordType, setConfirmPasswordType] = useState("password"); //Showing confirm password
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const handleConfirmPasswordType = () => {
    setConfirmPasswordType(
      confirmPasswordType === "password" ? "text" : "password"
    );
  };
  /////cjc-end

  const handleSubmit = (e) => {
    e.preventDefault();

    ////////// Perform signup logic here
    if (newPassword && confirmPassword) {
      ///////////cjc-Compare the passoword
      if (newPassword === confirmPassword) {
        /* axios.post(`${apiBaseUrl}/reset`, email).then((res) => {
                if (res.data.status === 'success') {
                    localStorage.clear()
                    localStorage.setItem("access-token", res.data.accessJWT)
                    localStorage.setItem("refresh-token", res.data.refreshJWT)
                    localStorage.setItem("email", user.email)
                    localStorage.setItem("phoneNumber", user.phoneNumber)
                    localStorage.setItem("isVerified", res.data.isVerified)
                    // navigate('/signup/otp')
                } else {
                    alert(res.data.message)
                    console.log("message", res.data.message)
                }
            }) */
      } else {
        alert("Confirm Password!");
      }

      ///////////cjc-end
      //navigate("/signup/reset");
    } else {
      alert("Fill in all the information!");
    }
  };

  return (
    <div className="reset-password-wrapper">
      <DomainField className="domain-field" />
      <h1>Reset Password</h1>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="custom-form">
            <div className="input-group">
              <div className="input-row">
                <div className="input-unit">
                  <h4>Create your new password</h4>
                  <label>
                    Enter your registered email below to receive password reset
                    instructions
                  </label>
                </div>
              </div>
              <div className="input-row">
                <div className="input-unit">
                  <p>New Password</p>
                  <input
                    type={passwordType}
                    placeholder="Love*Marriage23"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  ></input>

                  {passwordType === "password" ? (
                    <HidePassword
                      className="eye"
                      onClick={handlePasswordType} /////////cjc-Showing newpassword
                      style={{ top: "55%" }}
                    />
                  ) : (
                    <ShowPassword
                      className="eye"
                      onClick={handlePasswordType}
                      style={{ top: "55%" }}
                    />
                  )}
                </div>
              </div>
              <div className="input-row">
                <div className="input-unit">
                  <p>Confirm Password</p>
                  <input
                    type={confirmPasswordType}
                    placeholder="***************"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  ></input>
                  {newPassword.length < 8 && (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#FF334D",
                        marginTop: "10px",
                      }}
                    >
                      Must be at least 8 characters
                    </p>
                  )}

                  {confirmPasswordType === "password" ? (
                    <HidePassword
                      className="eye"
                      onClick={handleConfirmPasswordType} ///////cjc-Showing confirmpassword
                      style={{ top: "55%" }}
                    />
                  ) : (
                    <ShowPassword
                      className="eye"
                      onClick={handleConfirmPasswordType}
                      style={{ top: "55%" }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="signup-button">
              <button type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
