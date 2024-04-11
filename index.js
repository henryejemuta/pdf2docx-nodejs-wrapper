const { promisify } = require('util');
const { exec } = require('child_process');
const execAsync = promisify(exec);

async function fromPdfToDocx(pdfFilePath, docxFilePath) {
    const command = `pdf2docx convert ${pdfFilePath} ${docxFilePath}`;
    try {
        const { stdout, stderr } = await execAsync(command);
        if (stderr) {
            throw new Error(`stderr: ${stderr}`);
        }
        return `Conversion successful. DOCX file saved at ${docxFilePath}`;
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}

module.exports = fromPdfToDocx;
