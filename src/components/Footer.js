import React from 'react';
import logo from '../images/footer-logo.png'
function Footer() {
    return (
        <Footer className='footer'>
            <div className='footer-content'>
                <img src={logo} alt='logo'></img>
                <div className='navigation'>
                    <h6 className='section-title'>Doormat navigation</h6>
                    <ul className='highlight'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Reservations</li>
                        <li>Menu</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className='contact'>
                    <h6 className='section-title'>Contact Us</h6>
                    <ul className='highlight'>
                        <li>Block A Chicago</li>
                        <li>0315673</li>
                        <li>littlelemon@gmail.com</li>
                    </ul>
                </div>
                <div className='social-media'>
                    <h6 className='section-title'>Social Media</h6>
                    <ul className='highlight'>
                        <li>Facebook little-lemon</li>
                        <li>Instagram little-lemon</li>
                    </ul>
                </div>
            </div>
        </Footer>
    )
}
export default Footer;