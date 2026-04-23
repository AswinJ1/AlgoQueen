import React from 'react'
import HeroComponent from '../components/HeroComponent'
import Footer from '../components/Footer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion'
import { Avatar } from '../components/ui/avatar'
import { Code, Laptop, Videotape, Video, StarsIcon, BookOpen, RocketIcon, Rocket } from 'lucide-react'

const ResourcesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroComponent hideHeroContent={true} />
      <div className="space-y-6 mb-16 pt-28 px-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-8 justify-center">
                                  {/* <Trophy size={24} className="text-indigo-600" /> */}
                                  <h2 className="text-4xl  ">Learning Resources</h2>
                                </div>
              {/* <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-indigo-600 mb-4">ICPC Algo Queen Winners</h1> */}
              {/* <p className="text-xl text-gray-600">Resources to help you prepare for the ICPC AlgoQueen Competition</p> */}
            {/* </div> */}
                {/* <div  className="space-y-6 mb-16"> */}
                <Card className="pt-5">
                  {/* <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
                      Training Sessions
                    </CardTitle>
                    <CardDescription>
                      Prepare for the competition with these resources
                    </CardDescription>
                  </CardHeader> */}
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-l-4 border-indigo-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center">
                            <Code className="h-5 w-5 text-indigo-600 mr-2" />
                            Explore  Resources

                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">
                          Explore resources to help you with your preparation.
                          </p>
                          {/* <p className="text-xs text-gray-500 italic mt-1">
                       *Disclaimer: Features are coming soon. Stay tuned!
                         </p> */}
                           {/* List with Lucide Icons */}
                          {/* <ul className="mt-3 space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                              <RocketIcon className="h-3 w-3 text-indigo-600 mr-2" />
                              <span>Beginners – New to programming? Get step-by-step guidance!</span>
                            </li>
                            <li className="flex items-center">
                              <Rocket className="h-3 w-3 text-indigo-600 mr-2" />
                              <span>Intermediate & Advanced – Improve your problem-solving with expert-curated content!</span>
                            </li>
                          </ul> */}
                          <div className="mt-4">
                          <button className="text-sm font-medium text-indigo-600 flex items-center   "  rel="noopener noreferrer">
                            <span className="">Start learning </span>
                            
                            {/* <StarsIcon size={18} className="ml-1 text-indigo-600" /> */}
                          </button>
                        </div>

                        </CardContent>
                      </Card>
                      
                      <Card className="border-l-4 border-indigo-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center">
                            <Laptop className="h-5 w-5 text-indigo-600 mr-2" />
                            Practice Problems
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">
                            A collection of past problems with solutions and explanations.
                          </p>
                          <div className="mt-4">
                            <button className="text-sm font-medium text-indigo-600 ">
                              Start practicing 
                            </button>
                            {/* href="#" target='blank'  */}
                          </div>
                        </CardContent>
                      </Card>
                      
                    </div>
                          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {/* Left side: Live Sessions */}
                          {/* <div className="md:col-span-1 lg:col-span-2">
                            <CardTitle className="flex items-center mb-2 text-lg font-semibold text-gray-800">
                              <Videotape className="h-6 w-6 text-indigo-600 mr-2" />
                              Live Sessions
                            </CardTitle>
                            <CardDescription className="mb-4 text-sm text-gray-600">
                              Click on any session to view details and join. Sessions are categorized by difficulty
                              level to help you choose the right training for your skill level.
                            </CardDescription>
                            <SessionAccordion 
                              sessions={sessionData} 
                              openSessionIds={openSessionIds}
                              onToggle={handleAccordionToggle} 
                            />
                             <CardDescription className="text-sm mt-2 text-gray-600 flex justify-normal">
  More Live Sessions are coming soon! Stay tuned for updates.
  <StarsIcon size={18} className="ml-1 text-indigo-600" />
</CardDescription>
                          </div> */}

                          {/* Right side: Calendar */}
                          {/* <div className="md:col-span-1">
                            <SessionCalendar onDateSelect={handleDateSelect} />
                          </div> */}
                        </div>

                    
                    <CardTitle className="flex items-center">
                      <Videotape className="h-6 w-6 text-indigo-600 mr-2 " />
                      Recorded Sessions
                    </CardTitle>
                    <CardDescription>
                    Prepare for the competition with these resources
                    </CardDescription>
                  
                    <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="video-0" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                              <div className="flex items-center">
                                <Video className="w-5 h-5 mr-2 text-indigo-600" />
                                <span>Recorded Session 2025</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                            <Accordion type="single" collapsible className="w-full">
                      
                      
                      <AccordionItem value="video-1" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 mr-2 text-indigo-600" />
                            <span>Introduction to Problem Solving</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2">
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <iframe 
                          className="w-full h-full rounded-md"
                          src="https://www.youtube.com/embed/9csxVu8oLRc" 
                          title="Introduction to Competitive Programming"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Instructor: Ashwin Krish, Gayatri S Namputiri</span>
                            <span className="text-gray-600">Duration: 32 minutes</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                   
                      <AccordionItem value="video-2" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 mr-2 text-indigo-600" />
                            <span>Intro to C++ STL for Competitive Programming</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2">
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <iframe 
                          className="w-full h-full rounded-md"
                          src="https://youtube.com/embed/LT2BzOr9GeU" 
                          title="Intro to C++ STL for Competitive Programming"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Instructor: Priya Pahwa IGDTUW</span>
                            <span className="text-gray-600">Duration: 1 hour 10 min</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="video-3" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 mr-2 text-indigo-600" />
                            <span>CP Platforms & Learning Resources</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2">
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <iframe 
                          className="w-full h-full rounded-md"
                          src="https://youtube.com/embed/nER7o2DG85o" 
                          title="CP Platforms & Learning Resources"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Instructors: Shivya Khandpur & Sneha Roychowdhury</span>
                            <span className="text-gray-600">Duration: 25 min</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                     
                         <AccordionItem value="video-4" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 mr-2 text-indigo-600" />
                            <span>Array/List Problems </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2">
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <iframe 
                          className="w-full h-full rounded-md"
                          src="https://youtube.com/embed/hJOpbfXEaiI" 
                          title="CP Platforms & Learning Resources"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Instructors: Nino Chkhaidze</span>
                            <span className="text-gray-600">Duration: 1 hour 25 min</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                       <AccordionItem value="video-5" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 mr-2 text-indigo-600" />
                            <span>Sorting </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2">
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <iframe 
                          className="w-full h-full rounded-md"
                          src="https://youtube.com/embed/TJrRDkmf7C4" 
                          title="CP Platforms & Learning Resources"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Instructors: Nino Chkhaidze</span>
                            <span className="text-gray-600">Duration: 1 hour 20 min</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                       <AccordionItem value="video-6" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 mr-2 text-indigo-600" />
                            <span>Graph Representation and Traversal</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2">
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <iframe 
                          className="w-full h-full rounded-md"
                          src="https://youtube.com/embed/Oi51bKulR28" 
                          title="Graph Representation and Traversal"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Instructors: Hetvi Bagdai (IIT Ropar)</span>
                            <span className="text-gray-600">Duration: 1 hour</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="video-7" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 mr-2 text-indigo-600" />
                            <span>Graph: Djikstra + Disjoint Set Union</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2">
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <iframe 
                          className="w-full h-full rounded-md"
                          src="https://youtube.com/embed/Yje8-eyuo1c" 
                          title="CP Platforms & Learning Resources"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Instructors: Hetvi Bagdai (IIT Ropar)</span>
                            <span className="text-gray-600">Duration: 54 min </span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    
                      
                      
                      {/* <AccordionItem value="video-2" className="border border-gray-200 rounded-md mb-3 overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 mr-2 text-indigo-600" />
                            <span>Basic Problem Solving</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2">
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                            <iframe 
                              className="w-full h-full rounded-md"
                              src="" 
                              title="Time Complexity and Big O Notation"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Instructor: Vishaal</span>
                            <span className="text-gray-600">Duration: 36 minutes</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem> */}
                      
                     
                   
                    </Accordion>
                              
                            </AccordionContent>
                          </AccordionItem>
                    </Accordion>
             
                    <div className="mt-6 mb-16">
                   
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* </div> */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default ResourcesPage
