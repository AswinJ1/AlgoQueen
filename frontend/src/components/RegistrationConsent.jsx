import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Info, ExternalLink, CheckCircle } from 'lucide-react';

const RegistrationConsent = () => {
  const consents = [
    {
      id: "rules",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      text: "I confirm that I have read and agree to the ICPC AlgoQueen contest rules, eligibility criteria, and code of conduct."
    },
    {
      id: "media",
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      text: "I consent to the use of my name, institution name, photographs, videos, contest submissions, and related event materials for ICPC Algo Queen promotional, educational, and reporting purposes."
    },
    {
      id: "sponsors",
      icon: <Info className="w-6 h-6 text-indigo-600" />,
      text: "I consent to ICPC sharing my contact information with event sponsors for communications related to employment opportunities, educational programs, internships, and career development initiatives."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-white to-purple-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight">
            Consent and Registration Acknowledgement
          </h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid gap-6 md:gap-10">
          <div className="space-y-6 md:space-y-8">
            {consents.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 sm:gap-6 border-b border-gray-200 pb-6 sm:pb-8 last:border-0"
              >
                <div className="shrink-0 pt-1">
                  {item.icon}
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-2 sm:mt-4 p-5 sm:p-8 bg-indigo-50/40 rounded-2xl border border-indigo-100/50"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="shrink-0 pt-1 hidden sm:block">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="w-full">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="shrink-0 sm:hidden">
                    <CheckCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 m-0">ICPC Global Registration</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  I understand that to be eligible to receive prizes and/or participation certificate, I must also complete my registration on the ICPC Global platform using the following link:
                </p>
                <a 
                  href="https://icpc.global/regionals/finder/AlgoQueen-2026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center sm:items-center items-start flex-wrap gap-2 text-indigo-600 hover:text-indigo-800 transition-colors py-2 text-sm sm:text-base"
                >
                  <span className="border-b border-indigo-200 hover:border-indigo-800 transition-colors break-all">
                    https://icpc.global/regionals/finder/AlgoQueen-2026
                  </span>
                  <ExternalLink className="w-4 h-4 shrink-0 mt-0.5 sm:mt-0" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationConsent;
