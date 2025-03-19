import React from 'react'
import HeroComponent from './components/HeroComponent'
import About from './components/AboutSection'
import RegisterSection from './components/RegisterSection'
import TrainingMaterials from './components/TrainingMaterials'
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
    </div>
  )
}

export default App
