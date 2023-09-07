import React from 'react';
import logo from '../images/logo.jpg';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login/SignUp</li>
                </ul>
                <button onClick={showDropDown} className='menuIcon'><AiOutlineMenu  /></button>
                <button onClick={hideDropDown} className='closeIcon' ><AiOutlineCloseCircle /></button>
            </nav>
        </header>
    )



}
export default Header;