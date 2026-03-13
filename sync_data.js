const fs = require('fs');
const path = require('path');

const csvPath = 'c:/Users/이시훈/Desktop/박준호/Spoonmap/spoonmap_list.csv';
const jsPath = 'c:/Users/이시훈/Desktop/박준호/Spoonmap/data.js';

function parseCSV(content) {
    const lines = content.trim().split('\n');
    const results = [];
    
    // Simple CSV parser that handles quotes
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;
        
        const row = [];
        let inQuotes = false;
        let currentValue = '';
        
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                row.push(currentValue.trim());
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        row.push(currentValue.trim());
        results.push(row);
    }
    return results;
}

try {
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    const rows = parseCSV(csvContent);
    
    const processedData = rows
        .filter(row => row[2] && row[2].trim() !== '') // Keep only rows with Map URL (index 2)
        .map(row => {
            // Mapping:
            // 0: 식당명, 1: Date, 2: Map, 3: Rate, 4: 사람, 5: 수식, 6: 식당 분류, 7: 주요 메뉴, 8: 지역-대분류, 9: 지역-소분류
            return {
                category: row[6] || '',
                name: row[0] || '',
                location_small: row[9] || '',
                rate: row[3] || '',
                map_url: row[2] || '',
                location_large: row[8] || '',
                menu: row[7] ? row[7].split(',').map(m => m.trim().replace(/^"|"$/g, '')) : []
            };
        });

    const jsContent = `const restaurantData = ${JSON.stringify(processedData, null, 2)};\n`;
    fs.writeFileSync(jsPath, jsContent, 'utf8');
    
    console.log(`Successfully processed ${processedData.length} records.`);
} catch (err) {
    console.error('Error processing CSV:', err);
    process.exit(1);
}
