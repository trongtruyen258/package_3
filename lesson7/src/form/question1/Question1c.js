import { useState } from "react";
import "./FormLogin.css";
export default function Question1c() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    alert(`Username: ${userName}
    Password: ${password}`);
    e.preventDefault();
  };
  return (
    <div className="form-ex3">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Login Form</h2>
        </div>
        <input
          className="input-ex3"
          type="text"
          placeholder="Email or Username"
          required
          onChange={handleChangeUserName}
        ></input>
        <input
          className="input-ex3"
          placeholder="Password"
          type="password"
          required
          onChange={handleChangePassword}
        ></input>
        <input className="input-submit" type="submit" value={"Login"}></input>
        <p>Or Login with</p>
        <button className="bnt-login">Facebook</button>
        <button className="bnt-login">Google</button>
        <p>
          Not a member? <a href="#">Signup now</a>
        </p>
      </form>
    </div>
  );
}
