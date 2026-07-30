// Maps common country names (as they appear in the ranklist Excel/JSON data)
// to lowercase ISO 3166-1 alpha-2 codes, which the `flag-icons` package uses
// for its `fi fi-<code>` CSS classes.
const COUNTRY_NAME_TO_ISO2 = {
  'afghanistan': 'af', 'albania': 'al', 'algeria': 'dz', 'andorra': 'ad',
  'angola': 'ao', 'argentina': 'ar', 'armenia': 'am', 'australia': 'au',
  'austria': 'at', 'azerbaijan': 'az', 'bahamas': 'bs', 'bahrain': 'bh',
  'bangladesh': 'bd', 'belarus': 'by', 'belgium': 'be', 'belize': 'bz',
  'benin': 'bj', 'bhutan': 'bt', 'bolivia': 'bo', 'bosnia and herzegovina': 'ba',
  'botswana': 'bw', 'brazil': 'br', 'brunei': 'bn', 'bulgaria': 'bg',
  'burkina faso': 'bf', 'burundi': 'bi', 'cambodia': 'kh', 'cameroon': 'cm',
  'canada': 'ca', 'chad': 'td', 'chile': 'cl', 'china': 'cn',
  'colombia': 'co', 'costa rica': 'cr', 'croatia': 'hr', 'cuba': 'cu',
  'cyprus': 'cy', 'czech republic': 'cz', 'czechia': 'cz',
  'democratic republic of the congo': 'cd', 'denmark': 'dk', 'djibouti': 'dj',
  'dominican republic': 'do', 'ecuador': 'ec', 'egypt': 'eg',
  'el salvador': 'sv', 'estonia': 'ee', 'ethiopia': 'et', 'fiji': 'fj',
  'finland': 'fi', 'france': 'fr', 'gabon': 'ga', 'gambia': 'gm',
  'georgia': 'ge', 'germany': 'de', 'ghana': 'gh', 'greece': 'gr',
  'guatemala': 'gt', 'guinea': 'gn', 'haiti': 'ht', 'honduras': 'hn',
  'hong kong': 'hk', 'hungary': 'hu', 'iceland': 'is', 'india': 'in',
  'indonesia': 'id', 'iran': 'ir', 'iraq': 'iq', 'ireland': 'ie',
  'israel': 'il', 'italy': 'it', 'ivory coast': 'ci', "cote d'ivoire": 'ci',
  'jamaica': 'jm', 'japan': 'jp', 'jordan': 'jo', 'kazakhstan': 'kz',
  'kenya': 'ke', 'kuwait': 'kw', 'kyrgyzstan': 'kg', 'laos': 'la',
  'latvia': 'lv', 'lebanon': 'lb', 'lesotho': 'ls', 'liberia': 'lr',
  'libya': 'ly', 'liechtenstein': 'li', 'lithuania': 'lt', 'luxembourg': 'lu',
  'macau': 'mo', 'madagascar': 'mg', 'malawi': 'mw', 'malaysia': 'my',
  'maldives': 'mv', 'mali': 'ml', 'malta': 'mt', 'mauritania': 'mr',
  'mauritius': 'mu', 'mexico': 'mx', 'moldova': 'md', 'monaco': 'mc',
  'mongolia': 'mn', 'montenegro': 'me', 'morocco': 'ma', 'mozambique': 'mz',
  'myanmar': 'mm', 'namibia': 'na', 'nepal': 'np', 'netherlands': 'nl',
  'new zealand': 'nz', 'nicaragua': 'ni', 'niger': 'ne', 'nigeria': 'ng',
  'north korea': 'kp', 'north macedonia': 'mk', 'norway': 'no', 'oman': 'om',
  'pakistan': 'pk', 'palestine': 'ps', 'panama': 'pa',
  'papua new guinea': 'pg', 'paraguay': 'py', 'peru': 'pe',
  'philippines': 'ph', 'poland': 'pl', 'portugal': 'pt', 'qatar': 'qa',
  'republic of the congo': 'cg', 'romania': 'ro', 'russia': 'ru',
  'rwanda': 'rw', 'saudi arabia': 'sa', 'senegal': 'sn', 'serbia': 'rs',
  'sierra leone': 'sl', 'singapore': 'sg', 'slovakia': 'sk',
  'slovenia': 'si', 'somalia': 'so', 'south africa': 'za',
  'south korea': 'kr', 'south sudan': 'ss', 'spain': 'es', 'sri lanka': 'lk',
  'sudan': 'sd', 'suriname': 'sr', 'sweden': 'se', 'switzerland': 'ch',
  'syria': 'sy', 'taiwan': 'tw', 'tajikistan': 'tj', 'tanzania': 'tz',
  'thailand': 'th', 'togo': 'tg', 'trinidad and tobago': 'tt',
  'tunisia': 'tn', 'turkey': 'tr', 'turkmenistan': 'tm', 'uganda': 'ug',
  'ukraine': 'ua', 'united arab emirates': 'ae', 'uae': 'ae',
  'united kingdom': 'gb', 'uk': 'gb',
  'united states': 'us', 'united states of america': 'us', 'usa': 'us',
  'us': 'us', 'uruguay': 'uy', 'uzbekistan': 'uz', 'venezuela': 've',
  'vietnam': 'vn', 'yemen': 'ye', 'zambia': 'zm', 'zimbabwe': 'zw',
};

// Accepts a country name (e.g. "India") or an existing ISO2 code (e.g. "in")
// and returns a lowercase ISO2 code usable in a `fi fi-<code>` class, or
// null if it can't be resolved.
export function getCountryIso2(countryCode) {
  if (!countryCode) return null;
  const normalized = String(countryCode).trim().toLowerCase();
  if (normalized.length === 2) return normalized;
  return COUNTRY_NAME_TO_ISO2[normalized] || null;
}
