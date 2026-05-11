import React from 'react'
import PriceSection from '../components/PriceSection'
import HeroComponent from '../components/HeroComponent'
import Footer from '../components/Footer'

const PricePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100 overflow-x-hidden">
      <HeroComponent hideHeroContent={true} />
      <div className="flex-grow pt-32 pb-16 px-4 max-w-7xl mx-auto w-full flex flex-col justify-center">
        {/* <div className="flex justify-center mb-8 z-10 relative">
          <h2 className="text-4xl text-slate-800 ">Prizes & Gadgets</h2>
        </div> */}
        <PriceSection/>
        
      </div>
      <div className="mt-auto z-10 relative">
        <Footer />
      </div>
    </div>
  )
}

export default PricePage
