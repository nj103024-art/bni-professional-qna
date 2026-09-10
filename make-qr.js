// 사용법: node make-qr.js https://배포된-주소
// 결과: qr.png (멤버 공유용 QR 코드)
const QRCode = require('qrcode');
const url = process.argv[2];
if (!url) { console.error('사용법: node make-qr.js <배포 URL>'); process.exit(1); }
QRCode.toFile('qr.png', url, {
  width: 900, margin: 2, errorCorrectionLevel: 'H',
  color: { dark: '#CF2030', light: '#FFFFFF' }
}, err => {
  if (err) throw err;
  console.log('생성 완료 → qr.png  (' + url + ')');
});
