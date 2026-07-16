# Leaderboard Update Guide

This guide explains how to update the leaderboard on the AlgoQueen website. 

The website uses `.json` files to render the leaderboard (`public/data/College_ranklist.json` and `public/data/School_ranklist.json`). However, when we receive the final ranklist from CodeChef (or another platform), it is usually in Excel format (`.xlsx`). 

To make this update process seamless, we have built automated conversion scripts. 

## Step-by-Step Update Process

### 1. Prepare your Excel Files
Take the newly received Excel files and rename them to:
- `College.xlsx` (for the College leaderboard)
- `School.xlsx` (for the School leaderboard)

### 2. Replace the Old Files
Move these two `.xlsx` files into the `public/data/` folder in the `frontend` directory. 
(Overwrite the existing `College.xlsx` and `School.xlsx` files if prompted).

### 3. Run the Conversion Scripts
Open your terminal (in VS Code or your command line tool), navigate to the `frontend` folder, and run the following commands:

**For the College Leaderboard:**
```bash
npm run convert:college
```

**For the School Leaderboard:**
```bash
npm run convert:school
```

### 4. Verify the Update
Once you run those commands, the scripts will read the Excel files and automatically overwrite the `College_ranklist.json` and `School_ranklist.json` files with the new data.

You can now start your local development server (`npm run dev`) or commit the changes to your Git repository. The website will automatically reflect the newly updated leaderboards!

---

### Advanced / Custom Usage
If you have a file with a different name (e.g., `Collegefinal.xlsx`) and don't want to rename it, you can run the script manually by passing arguments:
```bash
node src/scripts/convert_ranklist.js public/data/Collegefinal.xlsx public/data/College_ranklist.json College_ranklist
```
