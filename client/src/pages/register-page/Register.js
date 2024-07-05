import { useState } from "react";
import classes from '../login-page/SignUpSignIn.module.css';
import welcome from '../../img/g17.png';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
e.preventDefault();

const response = await fetch('http://localhost:5000/register', {
    method: 'POST',
    body: JSON.stringify({username,password}),
    headers: {'Content-Type': 'application/json'},
});
if (response.status === 200 ) {
  alert('Registration succeed');
} else {
  alert('Registration failed');
}
  }
  return (
    <>
      <form className={classes.register} onSubmit={register}>
      <div className={classes.registerCard}>
        <h1>Welcome to the Soft Grow!</h1>
        <img className={classes.welcome} src={welcome} alt="cute laptop happy" />
        <label>Please choose cool username and strong password</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={classes.registerBtn}>Register</button>
        <span>or</span>
        <button className={classes.loginBtn}>Login</button>
        </div>
      </form>
    </>
  );
}
