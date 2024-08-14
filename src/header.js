import './header.css';
import React from 'react';
import top_image from '../src/images/HWP5.gif';
function abc() {
    return (
        <div className='header'>
            <img className='image2' src={top_image}></img>
        <a href="" class="menu">   <div>Home</div></a> 
        <a href="" class="menu">   <div>Contact Us</div></a> 
        <a href="" class="menu">   <div>About us</div></a>
        <a href="" class="menu">   <div>Sign Up</div></a>
        <a href="" class="menu">   <div>Log in</div></a> 
        </div>
    );
}

export default abc;
