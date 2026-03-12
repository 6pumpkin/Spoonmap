const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// 1. Generate unique version tag based on current time
const version = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 12);
console.log(`🚀 New version generated: ${version}`);

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 2. Update version parameters in index.html
// Replaces ?v=... with the new version
const updatedHtml = html.replace(/\?v=[\w\d]+/g, `?v=${version}`);

if (html !== updatedHtml) {
    fs.writeFileSync(indexPath, updatedHtml);
    console.log('✅ index.html version tags updated.');
} else {
    console.log('ℹ️ No version tags found to update or already up to date.');
}

// 3. Git operations
try {
    console.log('📦 Adding files to git...');
    execSync('git add .');

    console.log('✍️ Committing changes...');
    execSync(`git commit -m "Auto Update: ${new Date().toLocaleString()}"`);

    console.log('⬆️ Pushing to GitHub...');
    execSync('git push origin main');
    
    console.log('\n✨ All updates completed successfully! Site will be updated in about 1 minute.');
} catch (error) {
    console.error('\n❌ An error occurred during git operations:');
    console.error(error.message);
    process.exit(1);
}
