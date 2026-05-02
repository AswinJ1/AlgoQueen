import React from 'react'
import ScheduleSection from '@/components/ScheduleSection'
import HeroComponent from '@/components/HeroComponent'
import Footer from '@/components/Footer'

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroComponent hideHeroContent={true} />
      <ScheduleSection />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Schedule
