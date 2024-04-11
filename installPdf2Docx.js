const { execSync } = require('child_process');
const { existsSync } = require('fs');

// Check if pdf2docx is installed
try {
    execSync('pdf2docx --version', { stdio: 'ignore' });
    console.log('pdf2docx is already installed.');
} catch (error) {
    // Install pdf2docx using pip
    console.log('pdf2docx is not installed. Installing...');
    try {
        execSync('pip install pdf2docx', { stdio: 'inherit' });
        console.log('pdf2docx installed successfully.');
    } catch (error) {
        console.error('Error installing pdf2docx:', error);
        process.exit(1);
    }
}
