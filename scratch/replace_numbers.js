const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace all variations of the old number
    content = content.replace(/917627013579/g, '916367466426');
    content = content.replace(/\+91 76270 13579/g, '+91 63674 66426');
    content = content.replace(/76270 13579/g, '63674 66426');
    content = content.replace(/7627013579/g, '6367466426');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated:', file);
        changedFiles++;
    }
});

console.log(`Successfully updated ${changedFiles} files.`);
