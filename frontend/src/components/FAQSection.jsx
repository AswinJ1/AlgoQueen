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
    question: "How do I get started with your product?",
    answer: "Getting started is simple. Just create an account, follow the onboarding guide, and you'll be up and running in minutes. Our intuitive interface makes it easy to navigate and explore all features."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards including Visa, Mastercard, and American Express. We also support payments through PayPal, Apple Pay, and Google Pay for your convenience."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial. You can upgrade to a paid plan anytime during or after your trial period."
  },
  {
    question: "How can I get support if I have issues?",
    answer: "Our support team is available 24/7. You can reach us through the in-app chat, email at support@example.com, or by phone at +1 (555) 123-4567. We typically respond to all inquiries within 2 hours."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees or hidden charges. If you cancel, you'll still have access until the end of your billing period."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6 md:px-12 transition-all duration-500 ease-in-out bg-gradient-to-r from-white to-purple-100">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our products and services"
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
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
