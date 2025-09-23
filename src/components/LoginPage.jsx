import React, { useState } from "react";
import "../components/styles/LoginPage.css";
import { Link } from "react-router-dom";
import logo from "../assets/primehire_no_bg.png";

const LoginPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="PrimeHire Logo" />
          </Link>
        </div>
        <p className="tagline">
          Experience the future of automation with Prime Hire
        </p>
      </div>

      <div className="login-right">
        <div
          className="switch-link"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
        >
          {mode === "login" ? "Sign up" : "Sign in"}
        </div>

        <div className="form-box">
          {mode === "login" ? (
            <>
              <h2>Sign in</h2>
              <p className="subtitle">
                Please sign-in below using your Google account or with your
                credentials.
              </p>

              <form>
                <input type="email" placeholder="Enter your email address" />
                <button type="submit" className="btn-primary">
                  Continue
                </button>
              </form>

              <Link>Sign in with SSO</Link>

              <div className="divider">
                <span></span> Or continue with <span></span>
              </div>

              <button className="btn-google">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                />
                Sign in with Google
              </button>
            </>
          ) : (
            <>
              <p className="signup-note">
                If your company is not whitelisted yet,
                <button className="request-access">Request access</button>
              </p>

              <h2>Create an account</h2>
              <p className="subtitle">
                We’re glad you’re here. Sign up below using your Google account
                or create a new account.
              </p>

              <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />
              
                <button type="submit" className="btn-primary">
                  Create account
                </button>
              </form>

              <div className="divider">
                <span></span> Or continue with <span></span>
              </div>

              <button className="btn-google">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                />
                Sign up with Google
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
