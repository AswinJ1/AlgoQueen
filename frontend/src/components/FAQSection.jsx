import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger
} from "@/components/ui/accordion";
import SectionHeading from './SectionHeading';

const faqs = [
  {
    question: "What is ICPC Algo Queen 2025?",
    answer: "ICPC Algo Queen 2025 is a competitive programming competition organized by Amrita Vishwa Vidyapeetham and endorsed by the ICPC Foundation. It aims to empower students, inspire coding excellence, and promote diversity in the tech community."
  },
  {
    question: "Who can participate in ICPC Algo Queen?",
    answer: "ICPC Algo Queen is open to both school and college students who have an interest in competitive programming and coding."
  },
  {
    question: "Is there an entry fee for the competition?",
    answer: "No, participation in ICPC Algo Queen is absolutely free."
  },
  {
    question: "Do I need to have prior coding experience to participate?",
    answer: "While prior coding experience can be helpful, ICPC Algo Queen welcomes participants of all skill levels. The competition is designed to encourage growth and learning."
  },
  {
    question: "Can I participate as a team or only as an individual?",
    answer: "You can participate only individually. Check the competition guidelines for more details."
  },
  {
    question: "What are the prizes for the winners?",
    answer:"Winners will be awarded exciting prizes that recognize their coding skills and achievements."

  },{
    question: "How will the competition be conducted?",
    answer:"Round 1 will be online for all the participants and Round 2 will be On-Site for Indian participants and Online (remotely proctored) for International Participants. Registered participants will receive detailed instructions about the competition format and rules closer to the event date."
  },
  {
    question:"Will there be any training provided before the competition?",
    answer:"Yes, ICPC Algo Queen aims to provide training resources to registered participants to help them prepare for the competition. Further details will be updated soon."
  },
  {
    question:"How will the judging process work?",
    answer:"The judging process will involve evaluating participants’ solutions to programming challenges based on accuracy, efficiency, and correctness."
  },
  {
    question:"Is there a specific programming language I need to use?",
    answer:"Participants can use C++/Python/Java/Kotlin"
  },

  {
    question:"Will certificates be provided for participation?",
    answer:"Yes, participants will receive certificates acknowledging their participation in ICPC Algo Queen 2025. "
  },
  {
    question: "How can I stay updated about the competition?",
    answer: "Keep an eye on the official ICPC Algo Queen website and follow our social media channels for updates, announcements, and important dates. Join our <a href='https://t.me/algoqueen2023' target='_blank' class='text-indigo-600 underline'>Telegram Channel</a>."
  }
  ,
  {
    question:"Who can I contact for further inquiries?",
    answer:"If you have more questions, feel free to reach out to our support team at <a href='mailto:algoqueen@cb.amrita.edu'>algoqueen@cb.amrita.edu</a>"
  },
  {
    question:"How can I get involved as a sponsor or mentor?",
    answer:"If you’re interested in sponsoring or mentoring participants, please contact us at algoqueen@cb.amrita.ed For any additional questions, don’t hesitate to get in touch with us. We’re here to help you have the best experience in ICPC Algo Queen 2024!"
  }

];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6 md:px-12 transition-all duration-500 ease-in-out bg-gradient-to-r from-white to-purple-100">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our products and services"
          className={"text-black"}
        />
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="my-4 rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <p className="text-lg font-medium">{faq.question}</p>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-gray-600">
               <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>

            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
