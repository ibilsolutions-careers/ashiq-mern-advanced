import react, { useState } from 'react';
import style from './Login.module.scss';
import {TextField, Button} from '@mui/material';
import axios from 'axios'


const Login = () => {

    const [email, setEmail] = useState('');
    const [passWord, setPassword] = useState('');

    const handleLogin = async() => {
        try {
          const response = "hello";
        } catch(err) {
            console.log("something went wrong", err);
        }
    }

    return (
      <div className={style.container}>
        <div className={style.innerContainer}>
          <div className={style.loginBox}>Image</div>
          <div className={style.loginBox}>
            <div className={style.loginForm}>
              <label className={style.headerTxt}>Login Form</label>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
              />
              <Button variant="outlined" onClick={handleLogin}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;