import React from 'react';
import restimage from '../images/restauranfood.jpg';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <main>
        <div className="hero">
            <div>
            <h1 className='display-title hero-content'>Little Lemon</h1>
            <p className='subtitle hero-content'>Chicago</p>
            <p className='intro hero-content'>We are a family owned Mediterranean
                restaurant focused on traditional
                recipes served with a modern twist.</p>
          <Link to='/table'><button id='reserve' className='btn'>Reserve a table</button></Link>
            </div>
            <div>
            <img src={restimage} alt='restauant food' className='hero-image'/>
            </div>
        </div>
        </main>
    )
}
export default Hero;