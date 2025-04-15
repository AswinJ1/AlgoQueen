import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Laptop, Trophy, Building, ChevronDown,Video, Book, Building2Icon, Building2, BuildingIcon, LucideBuilding2, VideoOffIcon, Videotape, Rocket, RocketIcon, StarsIcon, LucideTrain } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SessionAccordion from './SessionAccordion';
import SessionCalendar from './SessionCalender';
import { sessionData } from '../data/SessionData';
import SessionCard from './SessionCard';
import { useState } from 'react';
import { sessionData } from '../data/SessionData'

const TrainingMaterials = () => {
  const [openSessionIds, setOpenSessionIds] = useState([]);
  
  const handleDateSelect = (sessionIds) => {
    setOpenSessionIds(sessionIds);
  };

  const handleAccordionToggle = (openIds) => {
    setOpenSessionIds(openIds);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100">
    
      
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-8 justify-center">
                                  <Book size={24} className="text-indigo-600" />
                                  <h2 className="text-2xl font-bold ">Learning Resources</h2>
                                </div>
            {/* <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-indigo-600 mb-4">Training Materials</h1>
              <p className="text-xl text-gray-600">Resources to help you prepare for the ICPC AlgoQueen Competition</p>
            </div> */}
            
          
              <div  className="space-y-6 mb-16">
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
                          <a href="https://usaco.guide/general/resources-cp?lang=cpp" className="text-sm font-medium text-indigo-600 flex items-center   " target='_blank' rel="noopener noreferrer">
                            <span className="">Start learning →</span>
                            
                            {/* <StarsIcon size={18} className="ml-1 text-indigo-600" /> */}
                          </a>
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
                            <a href="https://codedrills.io/problems" target='blank' className="text-sm font-medium text-indigo-600 ">
                              Start practicing →
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                      
                    </div>
                          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {/* Left side: Live Sessions */}
                          <div className="md:col-span-1 lg:col-span-2">
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
                          </div>

                          {/* Right side: Calendar */}
                          <div className="md:col-span-1">
                            <SessionCalendar onDateSelect={handleDateSelect} />
                          </div>
                        </div>

                    
                    <CardTitle className="flex items-center">
                      <Videotape className="h-6 w-6 text-indigo-600 mr-2 " />
                      Recorded Sessions
                    </CardTitle>
                    <CardDescription>
                    Prepare for the competition with these resources
                    </CardDescription>
                  
                    
                    <div className="mt-6 mb-16">
                    <Accordion type="single" collapsible className="w-full">
                      
                          <AccordionItem value="video-1" className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
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
                                  src="https://us06web.zoom.us/rec/share/7bj17348HredG8QK-eU0SlVL89tyyyO0kWYCg1tR8kt2ni8z3Sq7PoK4dg4UO0i-.NKvXMk-8yrfhv3Gk?startTime=1659183555000" 
                                  title="Introduction to Competitive Programming"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Instructor: Vani R</span>
                                <span className="text-gray-600">Duration: 32 minutes</span>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="video-2" className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
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
                                  src="https://us06web.zoom.us/rec/share/FjV6zQ9RZMtv12FPDLZA7_bQX7-eb0_x7XBBL547qkmYmPm_gE-_demxdvKJuFe9.mE0bggmzbjR7DEpY" 
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
                          </AccordionItem>
                          
                          <AccordionItem value="video-3" className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                              <div className="flex items-center">
                                <Video className="w-5 h-5 mr-2 text-indigo-600" />
                                <span>Array/List Problems</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                                <iframe 
                                  className="w-full h-full rounded-md"
                                  src="https://us06web.zoom.us/rec/share/mgtl7u6Ot4nBWrIaeRSJWW-3i2wde4fljxzyivnaFAAFx78ibTPFfRnsz5I0K796.BFORs6FZdpXvaU35" 
                                  title="Dynamic Programming Techniques"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Instructor: Prabath Kini</span>
                                <span className="text-gray-600">Duration: 35 minutes</span>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="video-4" className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                              <div className="flex items-center">
                                <Video className="w-5 h-5 mr-2 text-indigo-600" />
                                <span>Sorting & Divide-and-Conquer</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                                <iframe 
                                  className="w-full h-full rounded-md"
                                  src="https://us06web.zoom.us/rec/share/hsRwt6m2rNl0OwBVBI8Nim6tT8eX2e90GuLuHOqmjRJfEN2bD2FIIKdjH1w_utDH.AvTxn9dBrC_BMC73?startTime=1661602632000" 
                                  title="Dynamic Programming Techniques"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Instructor: Karthika</span>
                                <span className="text-gray-600">Duration: 50 minutes</span>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="video-5" className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                              <div className="flex items-center">
                                <Video className="w-5 h-5 mr-2 text-indigo-600" />
                                <span>String Problems</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                                <iframe 
                                  className="w-full h-full rounded-md"
                                  src="https://us06web.zoom.us/rec/share/p4Aq1BCYOjrcWZlwbe2JKxUTZiWsUP4GcaDsqVsDW6lNG6ekJHcWlTMjVrVx08Ap.a4lsB9fuTMbY8qKz?startTime=1662812466000" 
                                  title="Dynamic Programming Techniques"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Instructor: Siddharth Maurya</span>
                                <span className="text-gray-600">Duration: 52 minutes</span>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          {/* <AccordionItem value="video-6" className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                              <div className="flex items-center">
                                <Video className="w-5 h-5 mr-2 text-indigo-600" />
                                <span>Greedy</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                                <iframe 
                                  className="w-full h-full rounded-md"
                                  src="https://us06web.zoom.us/rec/share/ZZKpiUIYmKj7DhQrUKGk9wM2AXYRYHOk51sT97ren6mdqDoR0ZDRMt8LWtYCCxNj.wFOakKt84EGhJuNz" 
                                  title="Dynamic Programming Techniques"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Instructor: Dr. Meena Gupta</span>
                                <span className="text-gray-600">Duration: 52 minutes</span>
                              </div>
                            </AccordionContent>
                          </AccordionItem> */}

                          <AccordionItem value="video-7" className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
                              <div className="flex items-center">
                                <Video className="w-5 h-5 mr-2 text-indigo-600" />
                                <span>Dynamic Programming</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                                <iframe 
                                  className="w-full h-full rounded-md"
                                  src="https://us06web.zoom.us/rec/share/FhmUY3t6DZZ-xInYNSIdMOQ9UzIM3Z4Q2DmNWh_HKfm3rVcWl2m6kc-eJjD5C5Gd.vvAN63c6USMsGsSd?startTime=1664021653000" 
                                  title="Dynamic Programming Techniques"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Instructor: Amrita Varshini</span>
                                <span className="text-gray-600">Duration: 42 minutes</span>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="video-8" className="border border-gray-200 rounded-lg overflow-hidden">
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
                                  src="https://us06web.zoom.us/rec/share/pPJWzoFTKNOODhhYB4z6-QaS6ezahBkFdT2DP_Eaz1zzpmNIEkCreW_rOe_ywbg.TIMwy2vyXI4Ic8_8" 
                                  title="Dynamic Programming Techniques"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Instructor: Vani R</span>
                                <span className="text-gray-600">Duration: 1 hour 5 minutes</span>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                       
                        </Accordion>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6 mb-16 ">
              <div className="flex items-center gap-2 mb-8 justify-center">
                                  <Trophy size={24} className="text-indigo-600" />
                                  <h2 className="text-2xl font-bold ">ICPC Algo Queen Winners</h2>
                                </div>
              {/* <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-indigo-600 mb-4">ICPC Algo Queen Winners</h1> */}
              {/* <p className="text-xl text-gray-600">Resources to help you prepare for the ICPC AlgoQueen Competition</p> */}
            {/* </div> */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="h-6 w-6 text-indigo-600 mr-2" />
                      ICPC Algo Queen Winners
                    </CardTitle>
                    <CardDescription>
                      Celebrating excellence in competitive programming
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="2024" className="border rounded-lg p-2 overflow-hidden">
                        <AccordionTrigger className="text-xl font-semibold text-indigo-600 px-4">
                          2024 Winners
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="space-y-8">
                            <div>
                              <h4 className="font-medium text-lg mb-4 mt-2">College Category</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* College Winner 1 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-1.jpeg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Sofiia Melnyk</h5>
                                  <p className="text-sm text-gray-600">TSNU Kyiv</p>
                                  <p className="text-xs text-gray-500">4th Year </p>
                                </div>
                                
                                {/* College Winner 2 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-2.jpg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Anastasiia Tovtyn</h5>
                                  <p className="text-sm text-gray-600"> Uzhhorod National University</p>
                                  <p className="text-xs text-gray-500">1st Year</p>
                                </div>
                                
                                {/* College Winner 3 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-3.jpg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Rania Ahmed Mohamed Heragy</h5>
                                  <p className="text-sm text-gray-600">FCIS,Ain Shams University</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                
                                {/* Additional College Winners */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-4.jpeg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Anushka Goyal
                                  </h5>
                                  <p className="text-sm text-gray-600">Thapar Institute of Engineering and Technology</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-5.jpg" alt="Winner"  className='h-full w-full object-cover ' />
                                  </Avatar>
                                  <h5 className="font-semibold">Nourhan Hanna Louiz</h5>
                                  <p className="text-sm text-gray-600">Assiut University</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-6.jpeg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Anjali Raj</h5>
                                  <p className="text-sm text-gray-600">Indian Institute of Technology, Kharagpur</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-7.jpg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Samia Preity
                                  </h5>
                                  <p className="text-sm text-gray-600">Shahjalal University of Science and Technology</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-8.jpg" alt="Winner"  className='h-full w-full object-cover object-[center_20%] ' />
                                  </Avatar>
                                  <h5 className="font-semibold">Anshita Singh</h5>
                                  <p className="text-sm text-gray-600">Harcourt butler technical university</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-no.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Zerin Shaima Meem</h5>
                                  <p className="text-sm text-gray-600">CUET, Bengladesh</p>
                                  <p className="text-xs text-gray-500"></p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner24c-9.jpeg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Sanskriti Malviya</h5>
                                  <p className="text-sm text-gray-600">IIIT, Bhagalpur</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-lg mb-4 mt-8">School Category</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* School Winners */}
                                {/* School Winner 1 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-1.jpg" alt="Winner"  className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Iroha Maple Heffernan</h5>
                            <p className="text-sm text-gray-600">Takarazukakita High School</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          
                          {/* School Winner 2 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-2.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Aya Khayata</h5>
                            <p className="text-sm text-gray-600">Nazik Al-Malaika High School</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>
                          
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-3.JPG" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Dobra Nicoleta-Emilia</h5>
                            <p className="text-sm text-gray-600">Mircea cel Bătrân National College</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>

                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-4.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Neha Singirikonda</h5>
                            <p className="text-sm text-gray-600">Chirec International School</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>

                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-5.jpeg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Snikitha Siddavatam</h5>
                            <p className="text-sm text-gray-600">Oakridge International School, Bachupally</p>
                            <p className="text-xs text-gray-500">12th Grade</p>


                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-6.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Lytvynenko Sofiia</h5>
                            <p className="text-sm text-gray-600">Scientific Lyceum "Polit"</p>
                            <p className="text-xs text-gray-500">11th Grade</p>

                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-7.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Jinisha Tejura</h5>
                            <p className="text-sm text-gray-600">NIOS</p>
                            <p className="text-xs text-gray-500">12th Grade</p>


                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-8.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Habiba Abdelhady Abdelhady</h5>
                            <p className="text-sm text-gray-600">Amr Mosaad official language school</p>
                            <p className="text-xs text-gray-500">10th Grade</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-9.jpg" alt="Winner" className='h-full w-full object-cover object-[center_20%]' />
                            </Avatar>
                            <h5 className="font-semibold">Arohi Gupta</h5>
                            <p className="text-sm text-gray-600">Seth Anandram Jaipuria School</p>
                            <p className="text-xs text-gray-500">10th Grade</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner24s-10.jpeg" alt="Winner"  className='h-full w-full object-cover object-[center_10%]' />
                            </Avatar>
                            <h5 className="font-semibold">Bhargavi Tejura</h5>
                            <p className="text-sm text-gray-600">Home School</p>
                            <p className="text-xs text-gray-500">7th Grade</p>
                          </div>
                           
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="2023" className="border rounded-lg p-2 overflow-hidden">
                        <AccordionTrigger className="text-xl font-semibold text-indigo-600 px-4">
                          2023 Winners
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="space-y-8">
                            <div>
                              <h4 className="font-medium text-lg mb-4 mt-2">College Category</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* College Winner 1 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-1.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Kezia Aurelia Cendranata</h5>
                                  <p className="text-sm text-gray-600">Binus University , Indonesia</p>
                                  <p className="text-xs text-gray-500">3rd Year </p>
                                </div>
                                
                                {/* College Winner 2 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-2.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Riya Singh</h5>
                                  <p className="text-sm text-gray-600"> MNNIT, Allahabad</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                
                                {/* College Winner 3 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-3.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Anushka Goyal</h5>
                                  <p className="text-sm text-gray-600">TIET, Punjab</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                {/* Additional College Winners */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-4.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Divya Porwal
                                  </h5>
                                  <p className="text-sm text-gray-600">KNIT Sultanpur</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-5.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Sayeda Tahmina</h5>
                                  <p className="text-sm text-gray-600">CUET, Bangladesh</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-6.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Urmi Biswas</h5>
                                  <p className="text-sm text-gray-600">CUET, Bangladesh</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-no.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Pragati Kesarwani
                                  </h5>
                                  <p className="text-sm text-gray-600">SIET, UP</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-8.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Tanisha Pareek</h5>
                                  <p className="text-sm text-gray-600">PICT Pune</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-9.jpeg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Ekta Rani</h5>
                                  <p className="text-sm text-gray-600">IIT(ISM) Dhanbad</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-10.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Khushi Agarwal</h5>
                                  <p className="text-sm text-gray-600">IIT Indore</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-11.png" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Anu Sharma</h5>
                                  <p className="text-sm text-gray-600">IGDTUW Delhi</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-12.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Mansura Naznine</h5>
                                  <p className="text-sm text-gray-600">RUET, Bangladesh</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-college-1.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Sanjida Nuri Pearl</h5>
                                  <p className="text-sm text-gray-600">CUET, Bangladesh</p>
                                  <p className="text-xs text-gray-500">4th Year</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-college-2.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Vaidehi Desai
                                  </h5>
                                  <p className="text-sm text-gray-600">PDEU, Gujarat</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-no.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Kajal Pawar</h5>
                                  <p className="text-sm text-gray-600">WCE, Sangli</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-lg mb-4 mt-8">School Category</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* School Winners */}
                                {/* School Winner 1 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-1.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Nino Chkhaidze</h5>
                            <p className="text-sm text-gray-600">V. Komarov Physics & Math School, Tbilisi</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>
                          
                          {/* School Winner 2 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-2.jpeg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Snikitha Siddavatam</h5>
                            <p className="text-sm text-gray-600">Oakridge International School, Bachupally</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>
                          
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-3.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Neha Singirikonda</h5>
                            <p className="text-sm text-gray-600">Chirec International School</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>

                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-4.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Hiya Chandrakar</h5>
                            <p className="text-sm text-gray-600">Krishna Public School, Raipur</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>

                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-5.jpeg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Lakshmi Siri Appalaneni</h5>
                            <p className="text-sm text-gray-600">R.H. King Academy</p>
                            <p className="text-xs text-gray-500">10th Grade</p>


                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-6.jpeg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Kritika Naagar</h5>
                            <p className="text-sm text-gray-600">Aster Public School, Greater Noida</p>
                            <p className="text-xs text-gray-500">12th Grade</p>

                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-7.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Kazi Maimuna Akther</h5>
                            <p className="text-sm text-gray-600">Victoria Government College</p>
                            <p className="text-xs text-gray-500">12th Grade</p>


                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-8.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Aatira Menon</h5>
                            <p className="text-sm text-gray-600">St.Patricks Academy Bengaluru</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-9.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Shahe Noor Akhter Noor</h5>
                            <p className="text-sm text-gray-600">BURICHANG ANANDA PILOT GOVT. HIGH SCHOOL</p>
                            <p className="text-xs text-gray-500">9th Grade</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-10.png" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Gayatri Taneja</h5>
                            <p className="text-sm text-gray-600">Greater Noida World School</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-11.jpeg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">S.E.Harsha</h5>
                            <p className="text-sm text-gray-600">Amrita vidyalayam</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-12.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Nazeefa Labiba</h5>
                            <p className="text-sm text-gray-600">Savar Cantonment Public School and College</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-13.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Tanisha Choudhary</h5>
                            <p className="text-sm text-gray-600">Krishna Public School</p>
                            <p className="text-xs text-gray-500">10th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-14.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Anusha Singh</h5>
                            <p className="text-sm text-gray-600">Sunbeam School Ballia</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-15.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Kamakshi Bali</h5>
                            <p className="text-sm text-gray-600">Presidium School, Raj Nagar</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="2022" className="border rounded-lg p-2 overflow-hidden">
                        <AccordionTrigger className="text-xl font-semibold text-indigo-600 px-4">
                          2022 Winners
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="space-y-8">
                            <div>
                              <h4 className="font-medium text-lg mb-4 mt-2">College Category</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* College Winners */}
                              
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-14.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold"></h5>
                                  <p className="text-sm text-gray-600">MES BRS PU College Vidyaranyapura, Bengaluru</p>
              
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-15.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Charvi Nagaraja</h5>
                                  <p className="text-sm text-gray-600">MES BRS PU College Vidyaranyapura, Bengaluru</p>

                                </div>
                                <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-34.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Supriya Gouda</h5>
                            <p className="text-sm text-gray-600"> MES BRS PU College Vidyaranyapura, Bengaluru</p>
                        
                          </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-lg mb-4 mt-8">School Category</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* School Winners */}
                                 {/* School Winner 1 */}
                                 <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-13.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Jinisha Tejura</h5>
                                  <p className="text-sm text-gray-600">NISSS Pune</p>
                                  <p className="text-xs text-gray-500">11th Grade</p>

                                </div>
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-16.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Kopal saxena</h5>
                            <p className="text-sm text-gray-600">LA Martiniere Girl’s College, Lucknow</p>
                            <p className="text-xs text-gray-500">9th Grade</p>
                          </div>
                          
                          {/* School Winner 2 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="\profile-s-17.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Dishita Bhatia</h5>
                            <p className="text-sm text-gray-600">LA Martiniere Girl’s College, Lucknow</p>
                            <p className="text-xs text-gray-500">9th Grade</p>
                          </div>
                          
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-18.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Tanisha Choudhary</h5>
                            <p className="text-sm text-gray-600">Krishna Public School</p>
                            <p className="text-xs text-gray-500">8th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-19.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Khooshi Asmi</h5>
                            <p className="text-sm text-gray-600">Surendranath Centenary School</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-20.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Gopika</h5>
                            <p className="text-sm text-gray-600">Bharatiya Vidya Bhavan's Vidya Mandir</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-21.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Sreenandhana</h5>
                            <p className="text-sm text-gray-600">Bharatiya Vidya Bhavan's Vidya Mandir</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-22.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Jyothika</h5>
                            <p className="text-sm text-gray-600">Bharatiya Vidya Bhavan's Vidya Mandir</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-23.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Waghulkar Kashmira Pankaj</h5>
                            <p className="text-sm text-gray-600">M.E.S Bal Shikshan School Mandir English Medium School</p>
                            <p className="text-xs text-gray-500">8th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-24.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Arundhati Kartik</h5>
                            <p className="text-sm text-gray-600">Mallya Aditi International School</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-25.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Mridu Prashanth</h5>
                            <p className="text-sm text-gray-600">Mallya Aditi International School</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-26.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Tanisha Singh Dhami</h5>
                            <p className="text-sm text-gray-600">Mallya Aditi International School</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-27.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Bhargavi Tejura</h5>
                            <p className="text-sm text-gray-600">NISSS Pune</p>
                            <p className="text-xs text-gray-500">5th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-28.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Vani Sharma</h5>
                            <p className="text-sm text-gray-600">Delhi Public School, Bangalore – East</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-29.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Avni Jain</h5>
                            <p className="text-sm text-gray-600">Delhi Public School, Bangalore – East</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-30.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Pallavi Biswas</h5>
                            <p className="text-sm text-gray-600">Delhi Public School, Bangalore – East</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-31.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Kavya K R</h5>
                            <p className="text-sm text-gray-600">Chinmaya Vidyalaya</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-32.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Gayathri K S</h5>
                            <p className="text-sm text-gray-600">Chinmaya Vidyalaya</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-33.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Malavika Unnikrishnan</h5>
                            <p className="text-sm text-gray-600">Chinmaya Vidyalaya</p>
                            <p className="text-xs text-gray-500">12th Grade</p>
                          </div>
                          {/* School Winner 3 */}
                        
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              
              </div>
              <div className="space-y-6 ">
              <div className="flex items-center gap-2 mb-8 justify-center">
                                  <Building2Icon size={24} className="text-indigo-600" />
                                  <h2 className="text-2xl font-bold ">Sponsored By</h2>
                                </div>
              {/* <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-indigo-600 mb-4">Sponsored By
              </h1> */}
              {/* <p className="text-xl text-gray-600">Resources to help you prepare for the ICPC AlgoQueen Competition</p> */}
            {/* </div> */}
           
  {/* Sponsors Card Section */}
  <Card className="bg-transparent border-none shadow-none">
   
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 place-items-center">
        {/* <div className="flex flex-col items-center justify-center p-6 text-justify ">
          <div className="text-3xl font-bold text-indigo-600 mb-4">
            <img src="/jetbrains.png" className="h-20" alt="jetbrainslogo" />
          </div>
          <p className="justify-normal text-sm text-gray-600">
          JetBrains is a leading developer of intelligent coding tools and IDEs,
          empowering programmers to write clean, efficient code. With a strong commitment to education and innovation, 
          JetBrains supports coding competitions and learning initiatives worldwide.

          </p>
        </div> */}
        
        <div className="flex flex-col items-center justify-center p-6 text-justify">
  <img src="/jane2.png" className="h-20 mb-4" alt="" />
  <p className="text-sm text-gray-600 max-w-lg text-justify mx-auto ">
    Jane Street is a global quantitative trading firm that applies mathematics, computer science, 
    and innovative thinking to financial markets. With a deep-rooted history in competitive programming, 
    Jane Street actively supports coding communities and offers exciting career opportunities in technology
    and finance.
  </p>
</div>

      </div>
      
      <div className="text-center mt-12">
        <h3 className="text-lg font-medium mb-2">Interested in Sponsoring?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Join our mission to promote competitive programming among students.
        </p>
        <a href="mailto:algoqueen@cb.amrita.edu" className="text-indigo-600 font-medium hover:underline">
          Contact us for sponsorship opportunities
        </a>
      </div>
    </CardContent>
  </Card>
  <div className="flex items-center gap-2 mb-8 justify-center">
                                  <Building2Icon size={24} className="text-indigo-600" />
                                  <h2 className="text-2xl font-bold ">Organized By</h2>
                                </div>
  {/* <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-indigo-600 mb-4">Organized By
              </h1> */}
              {/* <p className="text-xl text-gray-600">Resources to help you prepare for the ICPC AlgoQueen Competition</p> */}
            {/* </div> */}
{/* Sponsors Card Section */}
<Card className="bg-transparent border-none shadow-none ">
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center p-6 ">
          <div className="text-3xl font-bold text-indigo-600 mb-4">
            <img src="/amrita.png" className="h-[100px]" alt="jetbrainslogo" />
          </div>
          
        </div>
        
        <div className="flex flex-col items-center justify-center p-6 ">
          <div className="text-3xl font-bold text-indigo-600 mb-9">
            <img src="/icpclogo2024.png" className="h-[150px] " alt="" />
          </div>
        </div>
      </div>
      
    
     
    </CardContent>
  </Card>




              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default TrainingMaterials;    