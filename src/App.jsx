
import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    setError("");

    if (email === "") {
      setError("Please enter your email");
    }
    else if (password === "") {
      setError("Please enter your password");
    }
    else if (password.length !== 6) {
      setError("Password must be exactly 6 characters");
    }
    else {
      setError("Login Successful!");
    }
  }

  return (
    <div className="login-page">

      {/* Animated Background */}

      <div className="animated-bg">

        <div className="glow-orb orb-one"></div>
        <div className="glow-orb orb-two"></div>
        <div className="glow-orb orb-three"></div>

        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>


      {/* Navbar */}

      <nav className="navbar">
        <h2 className="logo">R<span>.</span></h2>
        <a href="/">Back to Home</a>
      </nav>


      {/* Login Section */}

      <div className="login-container">

        <div className="login-card">

          <div className="login-icon">
            <span>✦</span>
          </div>

          <p className="welcome-text">WELCOME BACK</p>

          <h1>
            Login to your <span>account.</span>
          </h1>

          <p className="subtitle">
            Enter your details to access your account.
          </p>


          {/* Login Form */}

          <form onSubmit={handlesubmit}>

            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                value={email}
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>


            <div className="form-options">

              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">Forgot password?</a>

            </div>


            <button type="submit" className="login-btn">
              Sign In <span>→</span>
            </button>


            {error && (
              <p className={error === "Login Successful!" ? "success" : "error"}>
                {error}
              </p>
            )}

          </form>


          <div className="divider">
            <span>OR</span>
          </div>


          <p className="signup-text">
            Don't have an account?
            <a href="#"> Sign up</a>
          </p>

        </div>


        <p className="footer-text">
          © 2026 Rohit Kumar. All rights reserved.
        </p>

      </div>

    </div>
  );
}

export default App;
