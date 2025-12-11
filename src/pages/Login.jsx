import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple mock login
    if (username && password) {
      setShowPopup(true);

      // Hide popup after 2 seconds
      setTimeout(() => setShowPopup(false), 2000);

      // Clear form
      setUsername("");
      setPassword("");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {showPopup && (
        <div className="popup-message">
          Yeah!! Welcome to BoldVizByte
        </div>
      )}
    </div>
  );
};

export default Login;
