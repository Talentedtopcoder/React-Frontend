import "./App.css";
import EmailVerify from "./pages/emailVerify/EmailVerify";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Login from "./pages/login/Login";
import Namaste from "./pages/namaste/Namaste";
import MobileNumber from "./pages/otp/MobileNumber";
import Otp from "./pages/otp/Otp";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Signup from "./pages/signup/Signup";

import Khatta from "./pages/khatta/Khatta"; ////////////cjc

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/otp-verify" element={<Otp />} />
          <Route path="/signup/otp-mobile" element={<MobileNumber />} />
          <Route path="/signup/namaste" element={<Namaste />} />
          <Route path="/signup/email-verify" element={<EmailVerify />} />
          <Route path="/signup/khatta" element={<Khatta />} />
          ////cjc
          <Route path="/login/forgot-password" element={<ForgotPassword />} />
          <Route path="/login/reset" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
