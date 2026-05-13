import React from 'react'
import LeaderboardSection from '../components/LeaderboardSection'
import HeroComponent from '../components/HeroComponent'
import Footer from '../components/Footer'

const RegisterLeaderPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100 overflow-x-hidden">
      <HeroComponent hideHeroContent={true} />
      <div className="flex-grow pt-32 pb-16 px-4 max-w-7xl mx-auto w-full flex flex-col justify-center">
        <LeaderboardSection />
      </div>
      <div className="mt-auto z-10 relative">
        <Footer />
      </div>
    </div>
  )
}

export default RegisterLeaderPage
