import React from 'react'
import HeroComponent from './components/HeroComponent'
import About from './components/AboutSection'
import RegisterSection from './components/RegisterSection'
import TrainingMaterials from './components/TrainingMaterials'
import FAQSection from './components/FAQSection'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
import InfoSection from './components/InfoCard';
import { Element } from 'react-scroll'


const App = () => {
  return (
    
    <div>
      <Element name="home">
      <HeroComponent></HeroComponent>
    </Element>
    <div>
     <InfoSection></InfoSection>
    </div> 
    <Element name="about">
      <About></About>
    </Element>
    <div>
      <RegisterSection></RegisterSection>
    </div>
    <Element name='learn'>
      <TrainingMaterials></TrainingMaterials>
    </Element>
    <Element name='faq'>
      <FAQSection></FAQSection>
    </Element>
    <Element name='contact'>
      <Footer></Footer>
    </Element>
    </div>
  )
}

export default App
