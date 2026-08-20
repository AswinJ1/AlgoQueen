import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

const args = process.argv.slice(2);

if (args.length < 3) {
  console.error("Usage: node convert_ranklist.js <input_excel_file> <output_json_file> <json_key_name>");
  console.error("Example: node convert_ranklist.js public/data/AlgoQueen26_Finaldraft%20list_(College).xlsx public/data/College_ranklist.json College_ranklist");
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);
const keyName = args[2];

const canonicalHeaders = {
  rank: 'rank',
  name: 'Name',
  userhandle: 'user_handle',
  username: 'user_handle',
  countrycode: 'countryCode',
  institute: 'institute',
  category: 'category',
  class: 'Class',
  score: 'score',
  totalpoints: 'score',
  penaltytime: 'penalty_time',
  totaltime: 'penalty_time',
  penalty: 'penalty'
};

const normalizeHeader = (header) => String(header)
  .trim()
  .replace(/[\s_-]+/g, '')
  .toLowerCase();

const normalizeRow = (row) => Object.fromEntries(
  Object.entries(row).map(([header, value]) => [
    canonicalHeaders[normalizeHeader(header)] || header,
    value
  ])
);

try {
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found at ${inputPath}`);
  }

  console.log(`Reading Excel file: ${inputPath}...`);
  
  const workbook = xlsx.readFile(inputPath);
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  console.log(`Converting sheet '${firstSheetName}' to JSON...`);
  const dataArray = xlsx.utils
    .sheet_to_json(worksheet, { defval: '', raw: false })
    .map(normalizeRow);

  const outputData = {
    [keyName]: dataArray
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  console.log(`Writing JSON output to: ${outputPath}...`);
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');
  
  console.log(`✅ Successfully converted ${dataArray.length} records!`);
  
} catch (error) {
  console.error("❌ Error during conversion:");
  console.error(error.message);
  process.exit(1);
}
