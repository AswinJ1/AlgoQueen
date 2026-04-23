import React from 'react';
const TestimonialCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      
      <div className="bg-blue-700 text-white rounded-2xl p-8 max-w-3xl w-full flex items-center justify-between gap-6 shadow-lg">
        
        {/* Left Content */}
        <div className="flex-1">
          
          {/* Quote Icon */}
          <div className="text-4xl mb-4 opacity-80">“</div>

          {/* Text */}
          <p className="text-lg leading-relaxed mb-6 text-white/90">
            This innovative solution offers unparalleled ease of use, allowing
            businesses to swiftly onboard exceptional developers and seamlessly
            integrate.
          </p>

          {/* Name */}
          <h3 className="font-semibold text-white">
            Isabella Martinez
          </h3>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-20 h-20 rounded-full object-cover border-4 border-white/30"
          />
        </div>

      </div>
    </div>
  );
};

export default TestimonialCard;