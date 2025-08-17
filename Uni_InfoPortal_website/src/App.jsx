import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Video-player/Videoplayer'

function App() {

  const [playState, setPlaystate] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAMS' title='What we Offer'/>
      <Programs/>
      <About setPlayState={setPlaystate}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Reviews' title='See What Student Says'/>
      <Reviews/>
      <Title subTitle='Contact us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer playState ={playState} setPlayState ={setPlaystate}/>
    </div>
  )
}

export default App