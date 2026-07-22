import React from "react"
import PrizeLeaderboard from "@/components/LeaderboardPrize"
import HeroComponent from '../components/HeroComponent'
import Footer from '../components/Footer'
export default function PrizeLeaderboardpage()
{
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100 overflow-x-hidden">
      <HeroComponent hideHeroContent={true} />
      <div className="flex-grow w-full flex flex-col pt-32">
        <PrizeLeaderboard />
      </div>
      <div className="mt-auto z-10 relative">
        <Footer />
      </div>
    </div>
    )
}