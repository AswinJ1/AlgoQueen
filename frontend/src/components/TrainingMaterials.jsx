import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Laptop, Trophy, Building, ChevronDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TrainingMaterials = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100">
    
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-algo-dark mb-4">Training Materials</h1>
              <p className="text-xl text-gray-600">Resources to help you prepare for the ICPC AlgoQueen Competition</p>
            </div>
            
            <Tabs defaultValue="training" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="training">Training Sessions</TabsTrigger>
                <TabsTrigger value="winners">Past Winners</TabsTrigger>
                <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
              </TabsList>
              
              <TabsContent value="training" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
                      Training Sessions
                    </CardTitle>
                    <CardDescription>
                      Prepare for the competition with these resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-l-4 border-indigo-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center">
                            <Code className="h-5 w-5 text-indigo-600 mr-2" />
                            Algorithmic Problem Solving
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">
                            Learn essential algorithms and data structures used in competitive programming.
                          </p>
                          <div className="mt-4">
                            <a href="" className="text-sm font-medium text-indigo-600 hover:underline">
                              Access materials →
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
                            <a href="https://codedrills.io/problems" className="text-sm font-medium text-indigo-600 hover:underline">
                              Start practicing →
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-4">Upcoming Workshops</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-50 p-4 rounded-md">
                          <div className="font-medium">Dynamic Programming Workshop</div>
                          <div className="text-sm text-gray-600">Date: TBD</div>
                        </li>
                        <li className="bg-gray-50 p-4 rounded-md">
                          <div className="font-medium">Graph Algorithms Masterclass</div>
                          <div className="text-sm text-gray-600">Date: TBD</div>
                        </li>
                        <li className="bg-gray-50 p-4 rounded-md">
                          <div className="font-medium">Competitive Coding Tips & Tricks</div>
                          <div className="text-sm text-gray-600">Date: TBD</div>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="winners" className="space-y-6">
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
                                  <h5 className="font-semibold">Priya Sharma</h5>
                                  <p className="text-sm text-gray-600">IIT Bombay</p>
                                  <p className="text-xs text-gray-500">1st Year</p>
                                </div>
                                
                                {/* College Winner 2 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-2.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Anjali Patel</h5>
                                  <p className="text-sm text-gray-600">BITS Pilani</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                
                                {/* College Winner 3 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-3.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Meera Desai</h5>
                                  <p className="text-sm text-gray-600">MIT Manipal</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                {/* Additional College Winners */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-4.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Roshni Kumar</h5>
                                  <p className="text-sm text-gray-600">IIT Madras</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-5.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Anika Choudhary</h5>
                                  <p className="text-sm text-gray-600">NIT Warangal</p>
                                  <p className="text-xs text-gray-500">1st Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-6.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Tanvi Mehta</h5>
                                  <p className="text-sm text-gray-600">IIIT Delhi</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-no.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Sona Bhattacharya</h5>
                                  <p className="text-sm text-gray-600">Jadavpur University</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-8.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Ishita Jain</h5>
                                  <p className="text-sm text-gray-600">VIT Vellore</p>
                                  <p className="text-xs text-gray-500">1st Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-9.jpeg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Deepa Sharma</h5>
                                  <p className="text-sm text-gray-600">MNIT Jaipur</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-10.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Maya Pillai</h5>
                                  <p className="text-sm text-gray-600">IISC Bangalore</p>
                                  <p className="text-xs text-gray-500">1st Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-11.png" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Aditi Raman</h5>
                                  <p className="text-sm text-gray-600">BITS Goa</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-12.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Nisha Verma</h5>
                                  <p className="text-sm text-gray-600">DTU Delhi</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-college-1.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Nisha Verma</h5>
                                  <p className="text-sm text-gray-600">DTU Delhi</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-college-2.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Nisha Verma</h5>
                                  <p className="text-sm text-gray-600">DTU Delhi</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-no.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Nisha Verma</h5>
                                  <p className="text-sm text-gray-600">DTU Delhi</p>
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
                            <h5 className="font-semibold">Aisha Khan</h5>
                            <p className="text-sm text-gray-600">Delhi Public School</p>
                          </div>
                          
                          {/* School Winner 2 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-2.jpeg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Neha Gupta</h5>
                            <p className="text-sm text-gray-600">Kendriya Vidyalaya</p>
                          </div>
                          
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-3.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>

                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-4.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>

                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-5.jpeg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-6.jpeg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-7.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-8.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-9.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-10.png" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-11.jpeg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-12.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-13.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-14.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-s-15.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Riya Singh</h5>
                            <p className="text-sm text-gray-600">St. Mary's School</p>
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
                                    <img src="/profile-13.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Smita Agarwal</h5>
                                  <p className="text-sm text-gray-600">IIT Delhi</p>
                                  <p className="text-xs text-gray-500">2nd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-14.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Divya Thakur</h5>
                                  <p className="text-sm text-gray-600">NIT Trichy</p>
                                  <p className="text-xs text-gray-500">3rd Year</p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/profile-15.jpg" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Leela Kapoor</h5>
                                  <p className="text-sm text-gray-600">IIIT Hyderabad</p>
                                  <p className="text-xs text-gray-500">1st Year</p>
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
                              <img src="/profile-s-16.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Tanya Reddy</h5>
                            <p className="text-sm text-gray-600">Ryan International School</p>
                          </div>
                          
                          {/* School Winner 2 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="\profile-s-17.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Sara Iyer</h5>
                            <p className="text-sm text-gray-600">The Bishop's School</p>
                          </div>
                          
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-18.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-19.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-20.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-21.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-22.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-23.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-24.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-25.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-26.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-27.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-28.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-29.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-30.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-31.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-32.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-33.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="profile-s-34.jpg" alt="Winner" />
                            </Avatar>
                            <h5 className="font-semibold">Ananya Khanna</h5>
                            <p className="text-sm text-gray-600">Modern School</p>
                          </div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sponsors" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-6 w-6 text-indigo-600 mr-2" />
                      Sponsors
                    </CardTitle>
                    <CardDescription>
                      Organizations supporting the ICPC AlgoQueen Competition
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
                        <div className="text-3xl font-bold text-indigo-600 mb-4">
                          <img src="/icpc.png" className="h-20" alt="ICPC Logo" />ICPC
                        </div>
                        <p className="text-center text-sm text-gray-600">
                          The International Collegiate Programming Contest is an algorithmic 
                          programming contest for college students.
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
                        <div className="text-3xl font-bold text-indigo-600 mb-4">
                          <img src="/codedrills.png" className="h-20" alt="CodeDrills Logo" />CodeDrills
                        </div>
                        <p className="text-center text-sm text-gray-600">
                          Platform partner providing infrastructure for the online competition rounds.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-12">
                      <h3 className="text-lg font-medium mb-2">Interested in Sponsoring?</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Join our mission to promote competitive programming among students.
                      </p>
                      <a href="#" className="text-indigo-600 font-medium hover:underline">
                        Contact us for sponsorship opportunities
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
     
    </div>
  );
};

export default TrainingMaterials;    