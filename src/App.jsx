
import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();

    if (trimmedEmail === "") {
      setError("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password === "") {
      setError("Please enter your password");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("Login Successful!");
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
        <a href="#home">Back to Home</a>
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

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                value={email}
                placeholder="name@example.com"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


            <div className="input-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                value={password}
                placeholder="Enter your password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>


            <div className="form-options">

              <label className="remember" htmlFor="remember">
                <input id="remember" type="checkbox" />
                Remember me
              </label>

              <a href="#forgot">Forgot password?</a>

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
            <a href="#signup"> Sign up</a>
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
