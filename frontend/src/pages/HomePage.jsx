import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import HeroComponent from '../components/HeroComponent'
import About from '../components/AboutSection'
import RegisterSection from '../components/RegisterSection'
// import TrainingMaterials from '../components/TrainingMaterials'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoCard'
import TimelineSection from '@/components/Timeline'
import SpeakersSection from '@/components/SpeakersSection'
import { Element } from 'react-scroll'

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          smooth: true,
          duration: 500,
        });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Element name="home" id="home">
        <HeroComponent />
      </Element>

      <Element name="timeline id="timeline>
      <TimelineSection/>
      </Element>
      <Element name="info" id="info">
        <InfoSection />
      </Element>
      
      <Element name="about" id="about">
        <About />
      </Element>

      {/* <Element name="speakers" id="speakers">
      <SpeakersSection/>
      </Element> */}
      
      <Element name="register" id="register">
        <RegisterSection />
      </Element>
 
      {/* <Element name="learn" id="learn">
        <TrainingMaterials />
      </Element> */}
      
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
