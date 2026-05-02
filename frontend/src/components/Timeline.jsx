"use client";

const timeline = [
  {
    date: " July 10",
    label: "Registration Ends",
  },
  {
    date: "July 18",
    label: "Online Prelims",
  },
  {
    date: "August 2",
    label: "Online Finals",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-gradient-to-r from-white to-purple-100 py-12 px-6">
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
        
        {timeline.map((item, index) => (
          <div key={index}>
            
            {/* Date */}
            <h2 className="text-3xl md:text-4xl  text-gray-900">
              {item.date}
            </h2>

            {/* Label */}
            <p className="mt-2 text-gray-500 text-sm md:text-base">
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}