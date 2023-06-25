//////cjc
import React, { useState } from "react";
import { ReactComponent as DomainField } from "../../assets/images/domainName.svg";

import axios from "axios";
import { environment } from "../../environments/environment";
import { useEffect } from "react";

import "./khattaForm.scss";

const KhattaForm = () => {
  const apiBaseUrl = environment.apiBaseUrl;
  const client_id = environment.client_id;

  const [household, setHousehold] = useState("");
  const [lottery, setLottery] = useState("");
  const [lifeGoal, setLifeGoal] = useState("");
  const [dailyRoutine, setDailyRoutine] = useState("");
  const [partner, setPartner] = useState("");

  ////This handleSubmit is not a function of <form>. This is a function of a button.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (household && lottery && lifeGoal && dailyRoutine && partner) {
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
      console.log("asdffasdf");
    } else {
      alert("Fill in all the information!");
    }
  };

  return (
    <div className="khatta-wrapper">
      <DomainField className="domain-field" />
      <h1>Khatta Meetha</h1>
      <div className="form-content">
        <div className="row">
          <div className="input-unit">
            <h3> One household Chore you dislike doing?</h3>
            <textarea
              placeholder="Sunday laundary.."
              value={household}
              onChange={(e) => setHousehold(e.target.value)}
            />
          </div>
          <div className="input-unit">
            <h3> If you want a lottery, what will be your first purchase.</h3>
            <textarea
              placeholder="Payoff my parents mortage.."
              value={lottery}
              onChange={(e) => setLottery(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-unit">
            <h3> What are your life goals?</h3>
            <textarea
              placeholder="To build a treehouse by ocean.."
              value={lifeGoal}
              onChange={(e) => setLifeGoal(e.target.value)}
            />
          </div>
          <div className="input-unit">
            <h3> A Daily Routine you can't miss?</h3>
            <textarea
              placeholder="Morning gratitude journal.."
              value={dailyRoutine}
              onChange={(e) => setDailyRoutine(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-unit">
            <h3> What matters you the most in a partner?</h3>
            <textarea
              placeholder="Flowers and Kulfi.."
              value={partner}
              onChange={(e) => setPartner(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <a> Save </a>
          <button type="submit" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default KhattaForm;
