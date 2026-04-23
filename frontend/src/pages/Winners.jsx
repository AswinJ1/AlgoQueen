import React from 'react'
import HeroComponent from '../components/HeroComponent'
import Footer from '../components/Footer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion'
import { Avatar } from '../components/ui/avatar'
import { Trophy } from 'lucide-react'

const WinnersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroComponent hideHeroContent={true} />
      <div className="space-y-6 mb-16 pt-28 px-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-8 justify-center">
                                  {/* <Trophy size={24} className="text-indigo-600" /> */}
                                  <h2 className="text-4xl  ">ICPC Algo Queen Winners</h2>
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
                    <Accordion type="single" collapsible className="space-y-4 ">

                      <AccordionItem value="2025" className="border p-2 overflow-hidden rounded-md">
                        <AccordionTrigger className="text-xl font-semibold text-indigo-600 px-4">
                          2025 Winners
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="space-y-8">
                            <div>
                              <h4 className="font-medium text-lg mb-4 mt-2">College Category</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* College Winner 1 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-1.jpg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Shraddha Srivastava</h5>
                                  <p className="text-sm text-gray-600">Indian Institute of Information Technology Allahabad</p>
                                  {/* <p className="text-xs text-gray-500">4th Year </p> */}
                                </div>
                                
                                {/* College Winner 2 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-2.jpg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Kanika</h5>
                                  <p className="text-sm text-gray-600"> National Institute of Technology, Silchar</p>
                                  {/* <p className="text-xs text-gray-500">1st Year</p> */}
                                </div>
                                
                                {/* College Winner 3 */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-3.jpeg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Anvesha Chauhan</h5>
                                  <p className="text-sm text-gray-600">indian institute of information technology lucknow</p>
                                  {/* <p className="text-xs text-gray-500">4th Year</p> */}
                                </div>
                                
                                {/* Additional College Winners */}
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-4.jpg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">
                                    Khushbu Khemchandani
                                  </h5>
                                  <p className="text-sm text-gray-600">Indian Institute of Technology (Indian School of Mines) Dhanbad</p>
                                  {/* <p className="text-xs text-gray-500">4th Year</p> */}
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-5.jpg" alt="Winner"  className='h-full w-full object-cover ' />
                                  </Avatar>
                                  <h5 className="font-semibold">Nandini</h5>
                                  <p className="text-sm text-gray-600">Jaypee Institute of Information Technology, Noida</p>
                                  {/* <p className="text-xs text-gray-500">4th Year</p> */}
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-6.png" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Joceline Araki</h5>
                                  <p className="text-sm text-gray-600">Binus University</p>
                                  {/* <p className="text-xs text-gray-500">3rd Year</p> */}
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-7.jpg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Shinjan Chaturvedi
                                  </h5>
                                  <p className="text-sm text-gray-600">IIT Roorkee</p>
                                  {/* <p className="text-xs text-gray-500">4th Year</p> */}
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-8.jpg" alt="Winner"  className='h-full w-full object-cover object-[center_20%] ' />
                                  </Avatar>
                                  <h5 className="font-semibold">Drishti</h5>
                                  <p className="text-sm text-gray-600">G B Pant DSEU Okhla 1</p>
                                  {/* <p className="text-xs text-gray-500">4th Year</p> */}
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-9.png" alt="Winner" />
                                  </Avatar>
                                  <h5 className="font-semibold">Ayuna Takashi</h5>
                                  <p className="text-sm text-gray-600">Keio University Graduate School</p>
                                  <p className="text-xs text-gray-500"></p>
                                </div>
                                
                                <div className="flex flex-col items-center text-center">
                                  <Avatar className="h-24 w-24 mb-3">
                                    <img src="/winner25c-10.jpg" alt="Winner" className='h-full w-full object-cover' />
                                  </Avatar>
                                  <h5 className="font-semibold">Ritu Kumari Singh</h5>
                                  <p className="text-sm text-gray-600">Indian Institute of Technology,Patna</p>
                                  {/* <p className="text-xs text-gray-500">3rd Year</p> */}
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
                              <img src="/winner25s-1.jpg" alt="Winner"  className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">gvantsa khvedelidze</h5>
                            <p className="text-sm text-gray-600">Vladimir Komarov Tbilisi School of Physics and Mathematics N199</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>
                          
                          {/* School Winner 2 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner25s-2.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Viktoriia</h5>
                            <p className="text-sm text-gray-600">Liceum "Polit"</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>
                          
                          {/* School Winner 3 */}
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner25s-3.jpeg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Viktoriia Yurchenko</h5>
                            <p className="text-sm text-gray-600">Uzhhorod Scientific Lyceum</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>

                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner25s-4.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Diya Sathishdev</h5>
                            <p className="text-sm text-gray-600">Home School</p>
                            <p className="text-xs text-gray-500">9th Grade</p>
                          </div>

                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner25s-5.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Swasti Patil</h5>
                            <p className="text-sm text-gray-600">Home School</p>
                            <p className="text-xs text-gray-500">9th Grade</p>


                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner25s-6.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Rosangel Bullon</h5>
                            <p className="text-sm text-gray-600">Saco oliveros</p>
                            <p className="text-xs text-gray-500">12th Grade</p>

                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-no.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Rahidil Bayramli</h5>
                            <p className="text-sm text-gray-600">Physics, mathematics and informatics biased lyceum</p>
                            <p className="text-xs text-gray-500">10th Grade</p>


                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/winner25s-8.jpg" alt="Winner" className='h-full w-full object-cover' />
                            </Avatar>
                            <h5 className="font-semibold">Mrunmai Suryawanshi</h5>
                            <p className="text-sm text-gray-600">Sanskar English School</p>
                            <p className="text-xs text-gray-500">10th Grade</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-no.jpg" alt="Winner" className='h-full w-full object-cover object-[center_20%]' />
                            </Avatar>
                            <h5 className="font-semibold">UnKnown</h5>
                            <p className="text-sm text-gray-600">Scientific Lyceum "Polit" of the Kremenchuk Humanitarian and Technological Academy</p>
                            <p className="text-xs text-gray-500">10th Grade</p>
                          </div>
                           {/* School Winner 3 */}
                           <div className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-3">
                              <img src="/profile-no.jpg" alt="Winner"  className='h-full w-full object-cover object-[center_10%]' />
                            </Avatar>
                            <h5 className="font-semibold">Rana Azka</h5>
                            <p className="text-sm text-gray-600">SMAS Al-Kautsar</p>
                            <p className="text-xs text-gray-500">11th Grade</p>
                          </div>
                           
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    <AccordionItem value="2024" className="border rounded-md p-2 overflow-hidden">
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
                      <AccordionItem value="2023" className="border rounded-md p-2 overflow-hidden">
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

                      <AccordionItem value="2022" className="border rounded-md p-2 overflow-hidden">
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
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default WinnersPage
