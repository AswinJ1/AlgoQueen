import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

// Map country names to ISO 2-letter country codes
const countryCodeMap = {
  'Afghanistan': 'af', 'Albania': 'al', 'Algeria': 'dz', 'Andorra': 'ad', 'Angola': 'ao',
  'Argentina': 'ar', 'Armenia': 'am', 'Australia': 'au', 'Austria': 'at', 'Azerbaijan': 'az',
  'Bahamas': 'bs', 'Bahrain': 'bh', 'Bangladesh': 'bd', 'Barbados': 'bb', 'Belarus': 'by',
  'Belgium': 'be', 'Belize': 'bz', 'Benin': 'bj', 'Bhutan': 'bt', 'Bolivia': 'bo',
  'Bosnia': 'ba', 'Botswana': 'bw', 'Brazil': 'br', 'Brunei': 'bn', 'Bulgaria': 'bg',
  'Burkina Faso': 'bf', 'Burundi': 'bi', 'Cambodia': 'kh', 'Cameroon': 'cm', 'Canada': 'ca',
  'Cape Verde': 'cv', 'Central African Republic': 'cf', 'Chad': 'td', 'Chile': 'cl', 'China': 'cn',
  'Colombia': 'co', 'Comoros': 'km', 'Congo': 'cg', 'Costa Rica': 'cr', 'Côte d\'Ivoire': 'ci',
  'Croatia': 'hr', 'Cuba': 'cu', 'Cyprus': 'cy', 'Czech Republic': 'cz', 'Czechia': 'cz',
  'Denmark': 'dk', 'Djibouti': 'dj', 'Dominica': 'dm', 'Dominican Republic': 'do',
  'Ecuador': 'ec', 'Egypt': 'eg', 'El Salvador': 'sv', 'Equatorial Guinea': 'gq', 'Eritrea': 'er',
  'Estonia': 'ee', 'Eswatini': 'sz', 'Ethiopia': 'et', 'Fiji': 'fj', 'Finland': 'fi',
  'France': 'fr', 'Gabon': 'ga', 'Gambia': 'gm', 'Georgia': 'ge', 'Germany': 'de',
  'Ghana': 'gh', 'Greece': 'gr', 'Grenada': 'gd', 'Guatemala': 'gt', 'Guinea': 'gn',
  'Guinea-Bissau': 'gw', 'Guyana': 'gy', 'Haiti': 'ht', 'Honduras': 'hn', 'Hungary': 'hu',
  'Iceland': 'is', 'India': 'in', 'Indonesia': 'id', 'Iran': 'ir', 'Iraq': 'iq',
  'Ireland': 'ie', 'Israel': 'il', 'Italy': 'it', 'Jamaica': 'jm', 'Japan': 'jp',
  'Jordan': 'jo', 'Kazakhstan': 'kz', 'Kenya': 'ke', 'Kiribati': 'ki', 'Korea': 'kr',
  'North Korea': 'kp', 'South Korea': 'kr', 'Kuwait': 'kw', 'Kyrgyzstan': 'kg',
  'Laos': 'la', 'Latvia': 'lv', 'Lebanon': 'lb', 'Lesotho': 'ls', 'Liberia': 'lr',
  'Libya': 'ly', 'Liechtenstein': 'li', 'Lithuania': 'lt', 'Luxembourg': 'lu', 'Madagascar': 'mg',
  'Malawi': 'mw', 'Malaysia': 'my', 'Maldives': 'mv', 'Mali': 'ml', 'Malta': 'mt',
  'Marshall Islands': 'mh', 'Mauritania': 'mr', 'Mauritius': 'mu', 'Mexico': 'mx', 'Micronesia': 'fm',
  'Moldova': 'md', 'Monaco': 'mc', 'Mongolia': 'mn', 'Montenegro': 'me', 'Morocco': 'ma',
  'Mozambique': 'mz', 'Myanmar': 'mm', 'Namibia': 'na', 'Nauru': 'nr', 'Nepal': 'np',
  'Netherlands': 'nl', 'New Zealand': 'nz', 'Nicaragua': 'ni', 'Niger': 'ne', 'Nigeria': 'ng',
  'North Macedonia': 'mk', 'Norway': 'no', 'Oman': 'om', 'Pakistan': 'pk', 'Palau': 'pw',
  'Palestine': 'ps', 'Panama': 'pa', 'Papua New Guinea': 'pg', 'Paraguay': 'py', 'Peru': 'pe',
  'Philippines': 'ph', 'Poland': 'pl', 'Portugal': 'pt', 'Qatar': 'qa', 'Romania': 'ro',
  'Russia': 'ru', 'Rwanda': 'rw', 'Saint Kitts and Nevis': 'kn', 'Saint Lucia': 'lc',
  'Saint Vincent and Grenadines': 'vc', 'Samoa': 'ws', 'San Marino': 'sm', 'Sao Tome': 'st',
  'Saudi Arabia': 'sa', 'Senegal': 'sn', 'Serbia': 'rs', 'Seychelles': 'sc', 'Sierra Leone': 'sl',
  'Singapore': 'sg', 'Slovakia': 'sk', 'Slovenia': 'si', 'Solomon Islands': 'sb', 'Somalia': 'so',
  'South Africa': 'za', 'Spain': 'es', 'Sri Lanka': 'lk', 'Sudan': 'sd', 'Suriname': 'sr',
  'Sweden': 'se', 'Switzerland': 'ch', 'Syria': 'sy', 'Taiwan': 'tw', 'Tajikistan': 'tj',
  'Tanzania': 'tz', 'Thailand': 'th', 'Timor-Leste': 'tl', 'Togo': 'tg', 'Tonga': 'to',
  'Trinidad and Tobago': 'tt', 'Tunisia': 'tn', 'Turkey': 'tr', 'Turkmenistan': 'tm',
  'Tuvalu': 'tv', 'Uganda': 'ug', 'Ukraine': 'ua', 'United Arab Emirates': 'ae',
  'United Kingdom': 'gb', 'United States': 'us', 'Uruguay': 'uy', 'Uzbekistan': 'uz', 'Vanuatu': 'vu',
  'Vatican': 'va', 'Venezuela': 've', 'Vietnam': 'vn', 'Yemen': 'ye', 'Zambia': 'zm', 'Zimbabwe': 'zw'
};

const getCountryCode = (countryName) => {
  if (!countryName) return 'xx';
  // Try direct match first
  if (countryCodeMap[countryName]) {
    return countryCodeMap[countryName];
  }
  // Try case-insensitive match
  for (const [key, value] of Object.entries(countryCodeMap)) {
    if (key.toLowerCase() === countryName.toLowerCase()) {
      return value;
    }
  }
  return 'xx'; // Default fallback
};

const files = [
  { 
    input: 'public/data/Overall_school_data.xlsx', 
    output: 'public/data/Prize_Overall_School.json', 
    category: 'Overall Champions', 
    level: 'School',
    columns: ['name', 'institute']
  },
  { 
    input: 'public/data/Overall_college.xlsx', 
    output: 'public/data/Prize_Overall_College.json', 
    category: 'Overall Champions', 
    level: 'College',
    columns: ['name', 'institute', 'State']
  },
  { 
    input: 'public/data/National_champion_school.xlsx', 
    output: 'public/data/Prize_National_School.json', 
    category: 'National Champions', 
    level: 'School',
    columns: ['Name', 'institute', 'State']
  },
  { 
    input: 'public/data/State_wise_school.xlsx', 
    output: 'public/data/Prize_State_School.json', 
    category: 'State Champions', 
    level: 'School',
    columns: ['name', 'institute', 'State', 'State wise rank ']
  },
  { 
    input: 'public/data/State_wise_college.xlsx', 
    output: 'public/data/Prize_State_College.json', 
    category: 'State Champions', 
    level: 'College',
    columns: ['Name', 'College', 'State', 'State Wise Rank']
  },
];

files.forEach(({ input, output, category, level, columns }) => {
  try {
    const inputPath = path.resolve(input);
    const outputPath = path.resolve(output);

    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      return;
    }

    console.log(`Converting ${input}...`);

    // Read Excel file
    const workbook = xlsx.readFile(inputPath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet);

    // Structure the data - extract only needed columns
    const winners = rows.map((row) => {
      const winner = {};
      
      // Handle name (either 'name' or 'Name')
      winner.name = row.name || row.Name || 'N/A';
      
      // Handle institute/college
      winner.institution = row.institute || row.College || 'N/A';
      
      // Handle country code - convert to 2-letter ISO code
      const countryName = row.countryCode || 'N/A';
      winner.countryCode = getCountryCode(countryName);
      
      // Handle state if present
      if (row.State) {
        winner.state = row.State;
      }
      
      // Handle prize rank if present
      if (row['State wise rank ']) {
        winner.prize = row['State wise rank '];
      }
      if (row['State Wise Rank']) {
        winner.prize = row['State Wise Rank'];
      }
      
      return winner;
    });

    const data = {
      category,
      level,
      description: `${category} - ${level}`,
      winners
    };

    // Write to JSON
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✓ Created: ${output} (${data.winners.length} winners)`);
    const cols = ['name', 'institution'];
    if (data.winners[0]?.countryCode) cols.push('countryCode');
    if (data.winners[0]?.state) cols.push('state');
    if (data.winners[0]?.prize) cols.push('prize');
    console.log(`  Columns: ${cols.join(', ')}`);
  } catch (error) {
    console.error(`Error processing ${input}:`, error.message);
  }
});

console.log('\nDone!');

