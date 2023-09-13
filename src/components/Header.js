import React from 'react';
import logo from '../images/logo.jpg';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import {Link } from "react-router-dom";

function Header() {
    function showDropDown(){
        const header=document.querySelector(".header")
        header.classList.add('active')
    }
    function hideDropDown(){
        const header=document.querySelector(".header")
        header.classList.remove('active')
    }
    return (
        <header className='header'>
            <nav className="navbar">
                <img src={logo} alt="logo"></img>
                <ul className='navList section-title'>
                  <Link to='/home' className='text-link'><li>Home</li></Link> 
                   <Link to='/#about' className='text-link'><li>About</li></Link> 
                   <Link to='/order' className='text-link'><li>Menu</li></Link>
                   <Link to='/table' className='text-link'> <li>Reservations</li></Link>
                   <Link to='/order' className='text-link'><li>Order Online</li></Link>
                   <Link to='/signup' className='text-link'> <li>Login/SignUp</li></Link>
                </ul>
                <button onClick={showDropDown} className='menuIcon'><AiOutlineMenu  /></button>
                <button onClick={hideDropDown} className='closeIcon' ><AiOutlineCloseCircle /></button>
            </nav>
        </header>
    )



}
export default Header;