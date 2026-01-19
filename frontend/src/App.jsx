import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//LOGIN SIGNUP PAGE//
function App() {
  if (!user)
    return (
      <div className="app-container">
        <h2>{isSignup ? "Create Account" : "Login"}</h2>
        <input>
          placeholder="Username" value={username}
          onchange={(e) => setUsername(e.target.value)}
        </input>
        <input>
          type="password"" placeholder="Password" value={password}
          onchange{(e) => setPassword(e.target.value)}
        </input>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="primary-btn" onClick={authenicate}>
          {isSignup ? "Sign Up" : "Login"}
        </button>
        <p>
          onClick={() => "setIssignup(!isSignup"}
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign up"}
        </p>
      </div>
    );
}

export default App;
