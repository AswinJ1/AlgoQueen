import React from 'react';
import { PlayCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const HowtoRegister = () => {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-white to-purple-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="How to Register"
        //   subtitle="Follow these simple steps to join ICPC AlgoQueen 2026"
          showEyebrow={false}
        />

        {/* <div className="flex items-start gap-3  p-4 mb-8 text-sm text-indigo-900">
          <Info size={18} className="text-indigo-600 flex-shrink-0 mt-0.5" />
          <p>
            Already have an ICPC account? Just use the registration link shared with you via email
            and log in directly — no need to sign up again.
          </p>
        </div> */}

        {/* Video */}
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-white/50">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/5Njx1yDb8w0"
              title="How to Register for ICPC AlgoQueen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex items-center gap-2 mt-3 text-gray-600 text-xl justify-center">
            <PlayCircle size={16} className="text-indigo-600" />
            <span>Watch the full walkthrough video</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowtoRegister;
