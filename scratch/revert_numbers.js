const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const excludePath = path.join(srcDir, 'app', 'multi-day-taxi-packages', 'page.tsx');

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
    if (file === excludePath) {
        console.log('Skipping:', file);
        return;
    }
    
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Revert to old number
    content = content.replace(/916367466426/g, '917627013579');
    content = content.replace(/\+91 63674 66426/g, '+91 76270 13579');
    content = content.replace(/63674 66426/g, '76270 13579');
    content = content.replace(/6367466426/g, '7627013579');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Reverted:', file);
        changedFiles++;
    }
});

console.log(`Successfully reverted ${changedFiles} files.`);
