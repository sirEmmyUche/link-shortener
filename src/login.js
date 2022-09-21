import React from 'react';
import { useState } from 'react';
import './form.css';


function LogIn({homepage, signUpPage}){

    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    });

    const handleLogInData = (event)=>{
         setLogInData(prevLogInData =>{
            return {...prevLogInData,
            [event.target.name]: event.target.value
            }
         })
    }

const sendToAPI = async()=>{
        //dont delete this code......
    await fetch('http://localhost:3000/login', {
      method: 'post',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        email: logInData.email,
        password: logInData.password,
      })  
    })
  
}

    const handleSubmit = (event)=>{
        event.preventDefault();
        sendToAPI();
    };


    return(
            <form 
            className='form-data'
            onSubmit={handleSubmit}>
                <h6>LogIn</h6>
            <input
                className='login-input-field'
                type="email"
                placeholder="example@gmail.com"
                required
                name="email"
                value={logInData.email}
                onChange={handleLogInData }

            />
            <input
                className='login-input-field'
                type="password"
                placeholder="Password"
                required
                name="password"
                value={logInData.password}
                onChange={handleLogInData }
            />
            <div className='login-gp-btn'>
            <button className='login-submit-btn' onClick={handleSubmit}>Submit</button>
            <button className='login-submit-btn'onClick={signUpPage} >SignUp</button>
            <button className='login-submit-btn' onClick={homepage}>Skip</button>
            </div>
            
        </form>         
        
    )
}

export {LogIn}