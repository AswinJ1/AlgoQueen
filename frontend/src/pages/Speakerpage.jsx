import React from 'react'
import SpeakersSection from '@/components/SpeakersSection'
import FAQSection from '@/components/FAQSection'
import HeroComponent from '@/components/HeroComponent'
import Footer from '@/components/Footer'
const Speakerpage = () => {
  return (
    <div className=''>
      <HeroComponent hideHeroContent={true} />
      <SpeakersSection />
        <div className="mt-auto">
        <Footer />
      </div>
      {/* <FAQSection /> */}
    </div>
  )
}

export default Speakerpage
