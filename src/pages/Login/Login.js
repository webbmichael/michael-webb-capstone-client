import React, { useEffect, useState } from "react";
import Header from '../../Component/Header/Header';
import './Login.scss';
import { Link,useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";


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
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button className="login__btn login__google" onClick={signInWithGoogle}>
            Login with Google
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
      </>
    );
  }