import React, { useState } from 'react'
import HeroComponent from '../components/HeroComponent'
import Footer from '../components/Footer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import { Avatar } from '../components/ui/avatar'
import { Code, Laptop, Videotape, Video, StarsIcon, BookOpen, RocketIcon, Rocket, ExternalLink, ArrowLeft, BookMarked } from 'lucide-react'

const getFavicon = (url) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return null;
  }
};

const SessionFlipCard = ({ session, isFlipped, onToggleFlip, compact = false }) => {
  const hasResources = Array.isArray(session.resources) && session.resources.length > 0;

  const FrontContent = ({ asSizer = false }) => (
    <>
      <div className="aspect-video bg-gray-100 relative">
        {asSizer ? (
          <div className="w-full h-full" />
        ) : (
          <iframe
            className="w-full h-full absolute inset-0"
            src={session.url}
            title={session.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className={`${compact ? 'p-4' : 'p-5'} flex flex-col flex-grow`}>
        <h3 className={`font-semibold ${compact ? '' : 'text-lg'} text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors`}>
          {session.title}
        </h3>
        <div className={`${compact ? 'pt-3' : 'pt-4'} border-t border-gray-100 flex flex-col gap-1 text-sm text-gray-600`}>
          <div className="flex items-start">
            <span className="font-medium text-gray-700 mr-2 whitespace-nowrap">Instructor:</span>
            <span className="line-clamp-2">{session.instructor}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-700 mr-2">Duration:</span>
            <span>{session.duration}</span>
          </div>
        </div>
        {hasResources && (
          <button
            type="button"
            onClick={asSizer ? undefined : onToggleFlip}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-lg transition-colors"
          >
            <BookMarked className="h-4 w-4" />
            View Resources
          </button>
        )}
      </div>
    </>
  );

  return (
    <div className="relative" style={{ perspective: '1500px' }}>
      {/* Invisible sizer — gives the container its natural height */}
      <div
        className="invisible bg-white rounded-xl border border-gray-100 flex flex-col"
        aria-hidden="true"
      >
        <FrontContent asSizer />
      </div>

      {/* Flipping inner */}
      <div
        className="absolute inset-0 transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <FrontContent />
        </div>

        {/* BACK */}
        {hasResources && (
          <div
            className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-xl border border-indigo-100 shadow-sm overflow-hidden flex flex-col"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-3 border-b border-indigo-100 bg-white/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 min-w-0">
                <BookMarked className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                <h3 className="font-semibold text-sm text-gray-900 truncate">
                  {session.instructor.split(/[,(]/)[0].trim()}'s Resources
                </h3>
              </div>
              <button
                type="button"
                onClick={onToggleFlip}
                className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-800 px-2 py-1 rounded-md hover:bg-indigo-100 transition-colors flex-shrink-0"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </button>
            </div>
            <div className="p-3 sm:p-4 overflow-y-auto flex-1 space-y-3">
              {session.resources.map((group, gi) => (
                <div key={gi}>
                  <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-indigo-700 mb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {group.items.map((item, ii) => {
                      const favicon = getFavicon(item.url);
                      return (
                        <a
                          key={ii}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white border border-gray-200 hover:border-indigo-400 hover:shadow-md rounded-lg p-2 transition-all group/link"
                        >
                          {favicon ? (
                            <img
                              src={favicon}
                              alt=""
                              className="w-5 h-5 flex-shrink-0 rounded"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          )}
                          <span className="text-xs font-medium text-gray-700 group-hover/link:text-indigo-600 line-clamp-2 flex-1">
                            {item.title}
                          </span>
                          <ExternalLink className="w-3 h-3 text-gray-400 group-hover/link:text-indigo-600 flex-shrink-0" />
                        </a>
                      );
                    })}
                  </div>
                  {group.note && (
                    <p className="text-[11px] italic text-gray-500 mt-2">{group.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ResourcesPage = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const toggleFlip = (key) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const recordedSessions2026 = [
    {
      id: 1,
      title: "Mastering CP",
      url: "https://www.youtube.com/embed/JW5iBz7ejFQ",
      instructor: "Jaskaran Singh, Software Engineer | Google",
      duration: "1hr"
    },
    {
      id: 2,
      title: "Competitive Programming for ICPC Roadmap, STL & Arrays Fundamentals",
      url: "https://www.youtube.com/embed/w74tQuJtyJY",
      instructor: "Sneha Roychowdhury, ICPC Regionalist 2024 & 2025, IGDTUW",
      duration: "1hr",
      resources: [
        {
          category: "Session Materials",
          items: [
            { title: "Google Drive Folder (Slides & Notes)", url: "https://drive.google.com/drive/folders/14HOrpzcq_G8pzXPAdhpP7QW_QG0F5TCR" },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "How to Get Started with DSA and Level Up to Advanced Topics like DP and Daily Contests",
      url: "https://www.youtube.com/embed/3ywU6OCx6RY",
      instructor: "Sidrah Aaishah, 3rd year CSE | IIIT Nagpur",
      duration: "1hr"}
      ,
    {
      id: 4,
      title: "Breaking the CP Myth, like a practical roadmap for ",
      url: "https://www.youtube.com/embed/eFQBbh1v1yw",
      instructor: "Trilasha Mazumder, Software Engineer II | Google",
      duration: "1hr",
      resources: [
        {
          category: "Starting off with coding (Code With Harry)",
          items: [
            { title: "C Programming", url: "https://lnkd.in/gyGWBHYG" },
            { title: "C++ Programming", url: "https://lnkd.in/gkZhXAk6" },
          ],
          note: "Doing C before C++ helps clear basics, but it isn't mandatory.",
        },
        {
          category: "Starting off with Competitive Programming",
          items: [
            { title: "Luv Kumar CP Playlist", url: "https://lnkd.in/guQFZxuE" },
          ],
        },
        {
          category: "Dynamic Programming",
          items: [
            { title: "Aditya Verma DP Playlist", url: "https://lnkd.in/gYwBFvVF" },
            { title: "Educational DP Contest (AtCoder)", url: "https://lnkd.in/gyqvhNVj" },
            { title: "Special DP Contest (Codeforces)", url: "https://lnkd.in/gxuQ6rFX" },
          ],
        },
        {
          category: "Additional Resources",
          items: [
            { title: "CP Algorithms", url: "https://cp-algorithms.com/index.html" },
            { title: "USACO Guide", url: "https://usaco.guide/" },
            { title: "OEIS", url: "https://oeis.org/" },
          ],
        },
      ],
    },
  ];

  const recordedSessions2025 = [
    { id: 1, title: "Introduction to Problem Solving", url: "https://www.youtube.com/embed/9csxVu8oLRc", instructor: "Ashwin Krish, Gayatri S Namputiri", duration: "32 min" },
    { id: 2, title: "Intro to C++ STL for Competitive Programming", url: "https://youtube.com/embed/LT2BzOr9GeU", instructor: "Priya Pahwa IGDTUW", duration: "1 hr 10 min" },
    { id: 3, title: "CP Platforms & Learning Resources", url: "https://youtube.com/embed/nER7o2DG85o", instructor: "Shivya Khandpur & Sneha Roychowdhury", duration: "25 min" },
    { id: 4, title: "Array/List Problems", url: "https://youtube.com/embed/hJOpbfXEaiI", instructor: "Nino Chkhaidze", duration: "1 hr 25 min" },
    { id: 5, title: "Sorting", url: "https://youtube.com/embed/TJrRDkmf7C4", instructor: "Nino Chkhaidze", duration: "1 hr 20 min" },    { id: 6, title: "Graph Representation and Traversal", url: "https://youtube.com/embed/Oi51bKulR28", instructor: "Hetvi Bagdai (IIT Ropar)", duration: "1 hr" },
    { id: 7, title: "Graph: Djikstra + Disjoint Set Union", url: "https://youtube.com/embed/Yje8-eyuo1c", instructor: "Hetvi Bagdai (IIT Ropar)", duration: "54 min" }
  ];
//  resources: [
//         {
//           category: "Reference Reading",
//           items: [
//             { title: "Dijkstra's Shortest Path (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7/" },
//           ],
//         },
//       ],
//  resources: [
//         {
//           category: "Reference Reading",
//           items: [
//             { title: "BFS for a Graph (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/dsa/breadth-first-search-or-bfs-for-a-graph/" },
//           ],
//         },
//       ],
  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-r from-white to-purple-100">
      <HeroComponent hideHeroContent={true} />
      <div className="space-y-6 mb-16 pt-28 px-4 max-w-7xl mx-auto w-full  ">
        <div className="flex items-center gap-2 mb-8 justify-center ">
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
                    <div className="gap-6">
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
                          <div className="mt-8 flex flex-wrap gap-8 items-center">
                            <a href="https://cses.fi/problemset/" target="_blank" rel="noopener noreferrer" className="overflow-visible" title="CSES Problem Set">
                              <img src="https://cses.fi/logo.png" alt="CSES" className="h-12 sm:h-14 object-contain hover:scale-125 transition-transform duration-300" onError={(e) => { e.target.src = "https://via.placeholder.com/150x50?text=CSES"; }} />
                            </a>
                            <a href="https://atcoder.jp/" target="_blank" rel="noopener noreferrer" className="overflow-visible" title="AtCoder">
                              <img src="/company-icons/atcoder.png" alt="AtCoder" className="h-12 sm:h-14 object-contain hover:scale-125 transition-transform duration-300" onError={(e) => { e.target.src = "https://via.placeholder.com/150x50?text=AtCoder"; }} />
                            </a>
                            <a href="https://usaco.guide/" target="_blank" rel="noopener noreferrer" className="overflow-visible" title="USACO Guide">
                              <img src="/company-icons/usaco_guide.png" alt="USACO Guide" className="h-12 sm:h-14 object-contain hover:scale-125 transition-transform duration-300" onError={(e) => { e.target.src = "https://via.placeholder.com/150x50?text=USACO"; }} />
                            </a>
                            <a href="https://www.youtube.com/@OMath" target="_blank" rel="noopener noreferrer" className="overflow-visible" title="OMath YouTube">
                              <img src="/company-icons/channels4_profile.jpg" alt="OMath YouTube" className="h-12 sm:h-14 object-contain hover:scale-125 transition-transform duration-300" onError={(e) => { e.target.src = "https://via.placeholder.com/150x50?text=OMath"; }} />
                            </a>
                          </div>

                        </CardContent>
                      </Card>
                      
                      {/* <Card className="border-l-4 border-indigo-600">
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
                          </div>
                        </CardContent>
                      </Card> */}
                                                  {/* href="#" target='blank'  */}

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

                    
                    <CardTitle className="flex items-center mt-8">
                      <Videotape className="h-6 w-6 text-indigo-600 mr-2 " />
                      Recorded Sessions
                    </CardTitle>
                    <CardDescription className="mb-6">
                    Prepare for the competition with these resources
                    </CardDescription>
                  
                    <Tabs defaultValue="2026" className="w-full mt-2">
                      <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto mb-8 bg-purple-100 p-1 rounded-xl">
                        <TabsTrigger value="2026" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm">2026 Sessions</TabsTrigger>
                        <TabsTrigger value="2025" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm">2025 Sessions</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="2026" className="mt-4 focus-visible:outline-none focus:outline-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {recordedSessions2026.map((session) => {
                            const key = `2026-${session.id}`;
                            return (
                              <SessionFlipCard
                                key={key}
                                session={session}
                                isFlipped={flippedCards.has(key)}
                                onToggleFlip={() => toggleFlip(key)}
                              />
                            );
                          })}
                        </div>
                      </TabsContent>

                      <TabsContent value="2025" className="mt-4 focus-visible:outline-none focus:outline-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {recordedSessions2025.map((session) => {
                            const key = `2025-${session.id}`;
                            return (
                              <SessionFlipCard
                                key={key}
                                session={session}
                                isFlipped={flippedCards.has(key)}
                                onToggleFlip={() => toggleFlip(key)}
                                compact
                              />
                            );
                          })}
                        </div>
                      </TabsContent>
                    </Tabs>
             
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
