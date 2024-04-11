
import inquirer from 'inquirer';
import qr from 'qr-image';
import { writeFile, writeFileSync, createWriteStream } from 'fs';

async function generateQRCode() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'url',
        message: 'Enter the URL to generate a QR code for:',
      }
    ]);

    const qrCode_for_answer = qr.image(answers.url, { type: 'png' });
    qrCode_for_answer.pipe(createWriteStream('qr_img.png'));
    console.log('QR Code had generated as: qr_img.png');

    writeFileSync('URL.txt', answers.url);
    console.log('URL had saved towards file: URL.txt');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

generateQRCode();

