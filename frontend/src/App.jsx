import React from 'react'
import HeroComponent from './components/HeroComponent'
import About from './components/AboutSection'
import RegisterSection from './components/RegisterSection'
import TrainingMaterials from './components/TrainingMaterials'
import FAQSection from './components/FAQSection'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
const App = () => {
  return (
    
    <div>
      <div>
      <HeroComponent></HeroComponent>
  
    </div>
    <div>
      <About></About>
    </div>
    <div>
      <RegisterSection></RegisterSection>
    </div>
    <div>
      <TrainingMaterials></TrainingMaterials>
    </div>
    <div>
      <FAQSection></FAQSection>
    </div>
    <div>
      <ContactInfo></ContactInfo>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default App
