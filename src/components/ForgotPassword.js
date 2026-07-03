import React from "react";

function ForgotPassword() {
  return (
    <div className="container">
      <div className="card">
        <h2>Forgot Password</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
