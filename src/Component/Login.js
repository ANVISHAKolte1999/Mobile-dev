import React, {useState} from 'react';
import "./Login.css";
import {login} from "../Features/userSlice";
import { useDispatch } from 'react-redux';

const Login = () => {
    const [name,setName] = useState("");
    
    const [password,setPassword] = useState("");

    const dispatch =  useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
            name:name,
            
            password: password,
            loggedIn: true,
        })
        );
    };

    return (
        <div className="login">
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Login Here </h1>
            <input 
            type="name" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}

            />
<br></br><br></br>

            
               

            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}

            />
            <br></br><br></br>
            <button type= "submit" className="submit__btn">submit</button>
        </form>
            
        </div>
    )
}

export default Login
