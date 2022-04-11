import React, { useEffect, useState } from "react";
import Header from '../../Component/Header/Header';
import './Login.scss';
import { Link,useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../../Component/Button/Button";


export default function Login()  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useHistory();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate.replace("/dashboard");
    }, [user, loading]);
    return (
      <>
          <Header/>

      <div className="login">
        <div className="login__container">
        <h1 className="login__title">Login to store your images</h1>

          <input
            type="text"
            className="earth__input login__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="earth__input login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          
          <Button click={logInWithEmailAndPassword} text={"Login with Email"} />
          <div className="login__oneRemHeight"></div>
       
          <Button text={"Login with Google"} click={signInWithGoogle} />
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div className="mars__description">
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
      </>
    );
  }