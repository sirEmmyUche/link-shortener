import React, { useState } from "react";

function SignUp({homepage}){

const[signUpData, setSignUpData] = useState({
    firstName:'',
    lastName: '',
    email: '',
    password: '',
})

const sendToAPI = async()=>{
        //dont delete this code......
    const signup = await fetch('http://localhost:3000/signup', {
      method: 'post',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
        password: signUpData.password,
      })  
    })
    const response = await signup.json()
    console.log(response)
}

const handleSignUpData = (event)=>{
    setSignUpData(prevSignUpData =>{
        return {...prevSignUpData,
        [event.target.name]: event.target.value
        }
    })
}

const handleOnSubmitSignup = (event)=>{
    event.preventDefault();
    sendToAPI();
};

    return(
<form 
            className='form-data'
            onSubmit={handleOnSubmitSignup}>
                <h6>SignUp</h6>
           <label></label>     
            <input
                className='login-input-field'
                type="text"
                placeholder="First Name"
                required
                name="firstName"
                value={signUpData.firstName}
                onChange={handleSignUpData}

            />
            <input
                className='login-input-field'
                type="text"
                placeholder="last Name"
                required
                name="lastName"
                value={signUpData.lastName}
                onChange={handleSignUpData }
            />
            <input
                className='login-input-field'
                type="email"
                placeholder="email address"
                required
                name="email"
                value={signUpData.email}
                onChange={handleSignUpData }
            />
            <input
                className='login-input-field'
                type="password"
                placeholder="password"
                required
                name="password"
                value={signUpData.password}
                onChange={handleSignUpData }
            />

        <div>
            <button className="signup-btn" onClick={handleOnSubmitSignup}>SignUp</button>
            <button className="signup-btn" onClick={homepage}>Skip</button>
        </div>
        
    </form>
    )
}


export {SignUp} 
