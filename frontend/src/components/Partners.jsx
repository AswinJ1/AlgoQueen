const sponsors = [
  { id: 1, name: "Girl U Code", logo: "/company-icons/GUC.png", link: "https://girlucode.github.io/" }, // Replace "#" with the actual link

];

export default function CommunityPartners() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-white to-purple-100">
      
      {/* Heading */}
      <h2 className="text-3xl font-thin text-center mb-10 tracking-wide">
        Community Partner
      </h2>

      {/* Logos Grid */}
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-6">
        
        {sponsors.map((partner) => (
          <a
            key={partner.id}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 sm:w-48 md:w-56 flex items-center justify-center p-6 cursor-pointer"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-24 sm:h-28 md:h-32 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
            />
          </a>
        ))}

      </div>
    </section>
  );
}