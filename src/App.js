import React from 'react';
import Nav from './nav.js';
import { LogIn } from './login.js';
import { Main } from './main.js';
import { SignUp } from './signup.js';
import { useState, createContext } from 'react';
const userContext = createContext();

function App() {
   
    const [homePage, setHomePage] = useState(false);
    const [signUpPage, setSignUpPage] = useState(false);

    const handleSignUpPage = ()=>{
      setSignUpPage(prevSignUpPage => !prevSignUpPage)
    }

    const handleHomePage = ()=>{
      setHomePage(prevHomePage => !prevHomePage);
    }

    if(signUpPage === !false){
      // return {signUpPage === !false && <SignUp/>}
      return (<div><SignUp homepage={handleHomePage}/></div>)
    } else {

  return (
    <div id='App'>
      <userContext.Provider value={homePage}>
       {homePage === false && <LogIn homepage={handleHomePage} signUpPage={handleSignUpPage}/> } 
       {homePage === !false && <div>
        <Nav homepage={handleHomePage} signUpPage={handleSignUpPage}/>
        <Main/>
        </div> }
       </userContext.Provider> 
       
    </div>
     );}     
}

export default App;
