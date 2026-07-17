import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 3) {
  console.error("Usage: node convert_ranklist.js <input_excel_file> <output_json_file> <json_key_name>");
  console.error("Example: node convert_ranklist.js public/data/Collegefinal.xlsx public/data/College_ranklist.json College_ranklist");
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);
const keyName = args[2];

try {
  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found at ${inputPath}`);
  }

  console.log(`Reading Excel file: ${inputPath}...`);
  
  // Read the workbook
  const workbook = xlsx.readFile(inputPath);
  
  // Get the first sheet
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  
  // Convert sheet to JSON array
  console.log(`Converting sheet '${firstSheetName}' to JSON...`);
  const dataArray = xlsx.utils.sheet_to_json(worksheet, { raw: false });
  
  // Format the output JSON
  const outputData = {
    [keyName]: dataArray
  };
  
  // Write the output file
  console.log(`Writing JSON output to: ${outputPath}...`);
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');
  
  console.log(`✅ Successfully converted ${dataArray.length} records!`);
  
} catch (error) {
  console.error("❌ Error during conversion:");
  console.error(error.message);
  process.exit(1);
}
