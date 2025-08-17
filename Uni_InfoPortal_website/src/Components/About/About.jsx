import React from 'react'
import './About.css'
import about_image from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState})=>{
  return (
    <div className='about'> 
    <div className="about-left">
        <img src={about_image} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
    </div>
    <div className="about-right">
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Nurturing Tomorrow's Leaders Today</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nisi laudantium nobis voluptate ullam, aliquid necessitatibus beatae quae soluta iure?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, voluptatum.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut aperiam debitis nesciunt earum nemo eaque laborum aliquam libero, reiciendis quia eum minus asperiores saepe. Ut iusto quis sint fugit.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ad omnis expedita, consectetur minima molestiae, aliquam, architecto voluptatem fuga sit eos voluptates unde cupiditate praesentium.</p>
    </div>
    </div>
  )
}

export default About