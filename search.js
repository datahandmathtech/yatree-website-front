const fs = require('fs');
const path = require('path');

function search(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      search(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("bg-[url('") || content.includes('&#x27;')) {
        console.log('FOUND IN:', fullPath);
        const lines = content.split('\n');
        lines.forEach((line, i) => {
          if (line.includes("bg-[url('") || line.includes('&#x27;')) {
            console.log(`Line ${i+1}:`, line.trim());
          }
        });
      }
    }
  }
}

search('./src');
