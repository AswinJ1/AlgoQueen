const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const generateStateWinners = (level) => {
  return indianStates.flatMap(state => [
    { name: `First Ranker`, score: 450, institution: `Top ${level}, ${state}`, state: state },
    { name: `Second Ranker`, score: 420, institution: `Excellent ${level}, ${state}`, state: state },
    { name: `Third Ranker`, score: 400, institution: `Great ${level}, ${state}`, state: state }
  ]);
};

export const prizeWinnersData = [
  {
    category: "Overall Champions",
    level: "School",
    description: "Top performers across all regions",
    prizes: ["Trip to International Finals", "300 USD", "200 USD"],
    winners: [
      { name: "gvantsa khvedelidze", score: 430, institution: "Vladimir Komarov Tbilisi School of Physics and Mathematics N199", country: "ge" },
      { name: "Viktoriia", score: 430, institution: "Liceum \"Polit\"", country: "ua" },
      { name: "Victoria", score: 400, institution: "Uzhhorod Scientific Lyceum", country: "ua" }
    ]
  },
  {
    category: "Overall Champions",
    level: "College",
    description: "Top performers across all regions",
    prizes: ["100 USD + Medal & Certificate", "80 USD + Medal & Certificate", "50 USD + Medal & Certificate"],
    winners: [
      { name: "Shraddha Srivastava", score: 520, institution: "Indian Institute of Information Technology Allahabad", country: "in" },
      { name: "Kanika", score: 520, institution: "National Institute of Technology, Silchar", country: "in" },
      { name: "Anvesha Chauhan", score: 460, institution: "indian institute of information technology lucknow", country: "in" }
    ]
  },
  {
    category: "National Champions",
    level: "School",
    description: "Top performers nationwide",
    prizes: ["₹25,000 + Medal & Certificate", "₹15,000 + Medal & Certificate", "₹10,000 + Medal & Certificate"],
    winners: [
      { name: "Diya Sathishdev", score: 380, institution: "Home school", country: "in" },
      { name: "Swasti Patil", score: 380, institution: "Homeschooled", country: "in" },
      { name: "Mrunmai Suryawanshi", score: 300, institution: "Sanskar English School", country: "in" }
    ]
  },
  {
    category: "National Champions",
    level: "College",
    description: "Top performers nationwide",
    prizes: ["₹10,000 + Medal & Certificate", "₹8,000 + Medal & Certificate", "₹5,000 + Medal & Certificate"],
    winners: [
      { name: "Khushbu Khemchandani", score: 460, institution: "Indian Institute of Technology (Indian School of Mines) Dhanbad", country: "in" },
      { name: "Nandini", score: 450, institution: "Jaypee Institute of Information Technology, Noida", country: "in" },
      { name: "Shinjan Chaturvedi", score: 450, institution: "IIT Roorkee", country: "in" }
    ]
  },
  {
    category: "State Champions",
    level: "School",
    description: "Statewise top 3 performers",
    prizes: ["Medals & Certificates", "Medals & Certificates", "Medals & Certificates"],
    winners: generateStateWinners("School")
  },
  {
    category: "State Champions",
    level: "College",
    description: "Statewise top 3 performers",
    prizes: ["Medals & Certificates", "Medals & Certificates", "Medals & Certificates"],
    winners: generateStateWinners("College")
  }
];

export const PRIZE_NOTE = "Note *: Participants will receive the prize of the highest prize category achieved and will not receive multiple prizes across overlapping categories. However, they will continue to be officially recognized across all qualifying levels and ranking.";

