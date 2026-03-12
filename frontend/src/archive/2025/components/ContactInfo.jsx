import React from "react";
import { Mail, Phone, User, MapPin } from "lucide-react";

const ContactItem = ({ icon, label, value, href, delay }) => {
  const animationDelay = `${delay * 0.1}s`;
  
  const content = (
    <div className="flex items-center group space-x-3" style={{ animationDelay, animation: 'fade-in 0.5s ease-out forwards' }}>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 group-hover:bg-gray-100 transition-colors duration-300">
        {icon}
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs font-medium text-gray-500">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="contact-link block py-3 transition-colors hover:bg-gray-50/50 rounded-lg px-2">
      {content}
    </a>
  ) : (
    <div className="py-3">{content}</div>
  );
};

const ContactInfo = () => {
  return (
    <section className="w-full py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-0 mx-auto bg-gradient-to-r from-white to-purple-100">


      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-indigo-600 mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-indigo-600 ">Contact Information</h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            If you have any questions regarding ICPC Algo Queen 2025, please feel free to reach out.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 space-y-1 border border-gray-200">
          <ContactItem icon={<User className="w-5 h-5" />} label="Event Manager" value="Aravind B. L." delay={1} />
          <ContactItem icon={<MapPin className="w-5 h-5" />} label="Event" value="ICPC Algo Queen 2025" delay={2} />
          <ContactItem icon={<Mail className="w-5 h-5" />} label="Email" value="aravindbnl@am.amrita.edu" href="mailto:aravindbnl@am.amrita.edu" delay={3} />
          <ContactItem icon={<Phone className="w-5 h-5" />} label="WhatsApp" value="7034182923" href="https://wa.me/917034182923" delay={4} />
          <div className="pt-3 mt-2 border-t">
            <ContactItem icon={<Mail className="w-5 h-5" />} label="Queries" value="algoqueen@cb.amrita.edu" href="mailto:algoqueen@cb.amrita.edu" delay={5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
