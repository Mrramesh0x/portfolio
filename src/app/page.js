import React from 'react'
import Projects from './myprojects/page'
import Hero from './hero/page'
import Contact from './contact/page'
import Services from './services/page'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Projects/>
    <Services/>
    <Contact/>
    </div>
  )
}

export default Home