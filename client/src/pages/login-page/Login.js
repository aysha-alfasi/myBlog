import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import welcome from '../../img/g17.png';
import classes from './SignUpSignIn.module.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
   async function login(e) {
e.preventDefault();
 const response = await fetch('http://localhost:5000/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
});

if (response.ok) {
    response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
    })
    
} else {
    alert('wrong credintals');
}

  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <form className={classes.login} onSubmit={login}>
        <div className={classes.loginCard}>
        <h1>Glad to see you again</h1>
        <img className={classes.welcome} src={welcome} alt="cute laptop happy" />
        <label>Please write your username and password</label>
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
        <button className={classes.loginBtn}>Login</button>
        <span>or</span>
        <button className={classes.registerBtn}>Register</button>
        </div>
      </form>
    </>
  );
}
