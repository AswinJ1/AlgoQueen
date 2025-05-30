import React from 'react'
import HeroComponent from '../components/HeroComponent'
import About from '../components/AboutSection'
import RegisterSection from '../components/RegisterSection'
import TrainingMaterials from '../components/TrainingMaterials'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoCard'
import { Element } from 'react-scroll'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Element name="home" id="home">
        <HeroComponent />
      </Element>
      
      <Element name="info" id="info">
        <InfoSection />
      </Element>
      
      <Element name="about" id="about">
        <About />
      </Element>
      
      <Element name="register" id="register">
        <RegisterSection />
      </Element>
      
      <Element name="learn" id="learn">
        <TrainingMaterials />
      </Element>
      
      <Element name="faq" id="faq">
        <FAQSection />
      </Element>
      
      <Element name="contact" id="contact">
        <Footer />
      </Element>
    </div>
  )
}

export default HomePage
