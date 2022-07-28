import React, { useState } from 'react';
import './App.css';
const formURL = `${process.env.REACT_APP_BACKEND_URI}/user/login`;
async function login(credentials){
    return fetch(formURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(credentials)
    })
    .then(data => data.json())
}
const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const submit = async e => {
        e.preventDefault();
        const result = await login({email,password});
        console.log (result);
    }
    return (
        <div class="main_body">
            <form onSubmit={submit} method="POST">
                <input type="text" onChange={e => setEmail(e.target.value)} name="email" id="email" placeholder='Email'/>
                <input type="password" onChange={e => setPassword(e.target.value)} name='password' id="password" placeholder='Password'/>
                <input type="submit" value='Submit'/>
            </form>
        </div>
      )
};
  
export default Login;