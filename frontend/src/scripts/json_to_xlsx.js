import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 3) {
  console.error("Usage: node json_to_xlsx.js <input_json_file> <output_excel_file> <json_key_name>");
  console.error("Example: node json_to_xlsx.js public/data/College_ranklist.json public/data/Generated_College.xlsx College_ranklist");
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);
const keyName = args[2];

try {
  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input JSON file not found at ${inputPath}`);
  }

  console.log(`Reading JSON file: ${inputPath}...`);
  
  // Read the JSON file
  const jsonData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  const dataArray = jsonData[keyName];

  if (!dataArray || !Array.isArray(dataArray)) {
    throw new Error(`Invalid JSON format. Expected an array under the key "${keyName}".`);
  }
  
  console.log(`Converting ${dataArray.length} records to Excel format...`);
  
  // Convert JSON to worksheet
  const worksheet = xlsx.utils.json_to_sheet(dataArray);
  
  // Create a new workbook and append the worksheet
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Ranklist");
  
  // Write the output file
  console.log(`Writing Excel output to: ${outputPath}...`);
  xlsx.writeFile(workbook, outputPath);
  
  console.log(`✅ Successfully generated ${outputPath}!`);
  
} catch (error) {
  console.error("❌ Error during generation:");
  console.error(error.message);
  process.exit(1);
}
