import React from 'react'
import QuestSection from '../components/Questsection'
import HeroComponent from '../components/HeroComponent'
import Footer from '../components/Footer'

const QuestPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100 overflow-x-hidden">
      <HeroComponent hideHeroContent={true} />
      <div className="flex-grow w-full flex flex-col">
        <QuestSection/>
      </div>
      <div className="mt-auto z-10 relative">
        <Footer />
      </div>
    </div>
  )
}

export default QuestPage
