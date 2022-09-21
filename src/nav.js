import React from 'react';
import { useState } from 'react';
import Logo from './logo.js';
import { NavFeautres } from './navfeatures.js';
import './nav.css';

function Nav ({homepage,signUpPage}){
    const [menuBar, setmenubar] = useState(false);
    

    const handleMenuBar = ()=>{
        setmenubar(!menuBar)
    };

    return(
     <nav className='main-nav'>
            <div><Logo/></div> 
            <div className='phone-menu-bar' id = {menuBar? 'handleMenuBar' :'phone-menu-bar' } >
                <div><NavFeautres/></div> 
                <div className='nav-grp-btn'>
                <button className='login-btn' onClick={homepage}>LogIn</button> 
                <button className='signup-btn'onClick={signUpPage}>SignUp</button> 
                </div>  
            </div>
            <div className='img-menu'>
                <img src='/images/icon-menu.svg' alt='logo'
                 onClick={handleMenuBar}/></div>   
     </nav>
    );
}


export default Nav 