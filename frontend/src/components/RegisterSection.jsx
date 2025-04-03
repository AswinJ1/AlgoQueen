import React from 'react';
import { Calendar, Award, Info, Check, ArrowRight, Trophy, Zap, AwardIcon, Swords } from 'lucide-react';
import { Link } from 'react-router-dom';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-algo-primary text-black border rounded-md hover:bg-algo-dark transition ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>{children}</div>
);

const Separator = () => <hr className="border-gray-300 my-4" />;

const RegisterSection = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-2 mb-8 justify-center">
                      <Swords size={24} className="text-indigo-600" />
                      <h2 className="text-2xl font-bold ">Competition Information</h2>
                    </div>
            {/* <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-algo-dark mb-4 text-indigo-600">Competition Information</h1>
              <p className="text-xl text-gray-600">Join the ICPC AlgoQueen Competition</p>
            </div> */}
            
            {/* <Card className="border-algo-accent border-l-4">
              <h2 className="text-2xl text-algo-primary font-semibold">Registration Information</h2>
              <p className="text-gray-600">Everything you need to know before registering</p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Registration is <strong>completely free</strong>.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>This competition allows <strong>only individual participation</strong>.</span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                  <span>Having one of your teachers registered as a mentor or guide is advised. There is no key role for the mentor other than to motivate you throughout the contest.</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className={`flex items-center justify-center`} onClick={() => alert('Register Now')}>
                  Register Now     <Zap size={16} />
                </Button>
              </div>
            </Card> */}
{/*             
            <Card className="mt-8">
              <h2 className="text-2xl flex items-center text-algo-primary font-semibold">
                <Trophy className="h-6 w-6 mr-2 text-indigo-600 " /> Why Participate?
              </h2>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                  <span>Win amazing prizes and get recognition for your coding skills.</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Take on coding challenges and improve your programming abilities.</span>
                </li>
              </ul>
            </Card>
            
            <Separator />
                <Card className="mt-8">
                <h2 className="text-2xl flex items-center text-algo-primary font-semibold">
                <Info className="h-6 w-6 text-algo-primary mr-2 text-indigo-600" />
                Eligibility
              </h2> <br />
                <p className="mb-4">Any School/College student who has knowledge of at least one programming language (C++/JAVA/Python/Kotlin) can participate.</p>
                <p className="flex items-center text-algo-secondary font-medium">
                  <Award className="h-5 w-5 mr-2 text-indigo-600" />
                  Special prizes exclusively for girl students.
                </p>
                    </Card> */}
            
            <Card className="mt-8">
            <div className="space-y-6">
                  <div>
                 
                  <h2 className="text-2xl flex items-center text-algo-primary font-semibold">
                  <Calendar className="h-6 w-6 text-algo-primary mr-2 text-indigo-600" />
                  Competition Stages
              </h2> <br />
                    <h3 className="text-lg font-semibold text-algo-dark mb-2">Round 1 - Prelims (Online)</h3>
                    <p className="text-gray-600 mb-2">TBD</p>
                    <p className="mb-2"><strong>Platform:</strong> codedrills</p>
                    <p>This is an elimination round. This round will test the participants on their problem-solving skills using algorithms and data structures. The competition will consist of a set of challenging problems that the participant must solve within a limited time frame. Any eligible student can participate in this round. The contest is fully online. Participants only need to have a PC or a Laptop and stable internet connectivity.</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-semibold text-algo-dark mb-2">Round 2 - Finals (Online)</h3>
                    <p className="text-gray-600 mb-2">TBD</p>
                    <p>Online for both Indian Students and International Contestants</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-semibold text-algo-dark mb-2">Practice Contest</h3>
                    <p className="text-gray-600">TBD</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-semibold text-algo-dark mb-2">ICPC Algo Queen 2025 – Finals</h3>
                    <p className="text-gray-600">TBD</p>
                  </div>
                </div>
            </Card>
            <Card className="mt-8">
              <h2 className="text-2xl flex items-center text-algo-primary font-semibold">
                <Award className="h-6 w-6 mr-2  text-indigo-600" /> Awards & Prizes
              </h2>
            <ul className="space-y-3 mt-4 text-left">
            <li className="flex items-start">
              <Check className="h-5 w-5 flex-shrink-0 text-yellow-500 mr-2" />
              <span>Gold Medals for top 5 students (Rank 1 to 5).</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 flex-shrink-0 text-gray-400 mr-2" />
              <span>Silver Medals for the next 5 students (Rank 6 to 10).</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 flex-shrink-0 text-amber-700 mr-2" />
              <span>Bronze Medals for the next 5 students (Rank 11 to 15).</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500 mr-2" />
              <span>Sponsored Trip to Baku – A chance to attend the ICPC World Finals 2025 in Baku, Azerbaijan</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500 mr-2" />
              <span>Exciting gifts and Goodie Bags.</span>
            </li>
          </ul>

              <p className="mt-4 text-sm text-gray-600">*Further prize details will be announced later.</p>
            </Card>
          </div>
          
         
        </div>
      </main>
    </div>
  );
};

export default RegisterSection;