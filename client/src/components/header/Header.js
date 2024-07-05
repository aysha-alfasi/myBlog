import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import classes from './Header.module.css';
import logo from '../../img/g6.png';

export default function Header() {
const {setUserInfo, userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:5000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }
    const username = userInfo?.username;
    return (
        <>
            <header className={classes.header}>
                <Link to='/' ><img className={classes.logo} src={logo} alt="the logo" /></Link>
                <h1 className={classes.title}>The Soft Grow</h1>
                <p className={classes.headerP}>Don't wait until you get there, enjoy your growth steps ⋆｡˚</p>
                <nav>
                    {username && (
                        <>
                        <span ><div className={classes.theSpan}>{username}'s profile</div></span>
                            <Link to='/create'><div className={classes.newPost}>Create Post</div></Link>
                            <a onClick={logout} ><div className={classes.logout}>Logout</div></a>
         
                        </>
                    )}
                    {!username && (
                        <>
                            <Link to='/login'><div className={classes.login}>Login</div></Link>
                            <Link to='/register'><div className={classes.register}>Register</div></Link>
                {/*             <div className={classes.welcome}>
                <h2>Welcome to our home</h2>
                <p>Discover our nice  thoughts and articles </p>
                <div className={classes.welcomeBtns}>
                    <button>join us</button>
                    <button>Login</button>
                </div>
            </div> */}
                        </>
                    )}

                </nav>
            </header>
           
            
        </>
    );
}