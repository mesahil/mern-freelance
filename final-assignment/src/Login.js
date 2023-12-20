import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome Back!!</h1>
        <p>Connect, share your voice and make a difference.</p>
      </div>
      <div className="form-wrapper">
        <h2>Login</h2>
        <form action="" method="post">
          <div className="field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit">Join Now</button>
          <p style={{ color: "#828282" }}>
            Don't have an account? <a href="/user/register">Create One</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;