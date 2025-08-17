import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>A Trusted Path to Success</h1>
            <p>Our university is dedicated to academic excellence and innovation, offering diverse programs that prepare students for global challenges.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero