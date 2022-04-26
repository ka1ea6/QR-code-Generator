const qr_code_element = document.querySelector('.qr_code');
const outputCanvas = document.querySelector('.output--canvas');
const mainContent = document.querySelector('.main--content');
const generateBtn = document.querySelector('button');
generateBtn.addEventListener('click', (e) => {
  let user_input = document.getElementById('input--text');
  if (user_input.value !== '') {
    if (qr_code_element.childElementCount == 0) {
      generate(user_input);
    } else {
      qr_code_element.innerHTML = '';
      generate(user_input);
    }
  } else {
    qr_code_element.style.display = 'none';
  }
});

function generate(user_input) {
  qr_code_element.style = '';
  let side =
    window.innerHeight < window.innerWidth
      ? window.innerHeight * 0.3
      : window.innerWidth * 0.3;
  console.log(window.innerHeight, window.innerWidth, side);
  var qrcode = new QRCode(qr_code_element, {
    text: `${user_input.value}`,
    width: side,
    height: side,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
  qr_code_element.childNodes.forEach((el) => {
    el.style.display = 'block';
  });
  let download = document.createElement('button');
  download.classList.add('download--button');
  qr_code_element.appendChild(download);

  let download_link = document.createElement('a');
  download_link.setAttribute('download', 'qr_code.png');
  download_link.innerText = 'Download';

  download.appendChild(download_link);

  let qr_code_img = document.querySelector('.qr_code img');
  let qr_code_canvas = document.querySelector('canvas');
  qr_code_canvas.style.display = 'block';
  if (qr_code_img.getAttribute('src') == null) {
    setTimeout(() => {
      download_link.setAttribute('href', `${qr_code_canvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      download_link.setAttribute('href', `${qr_code_img.getAttribute('src')}`);
    }, 300);
  }
}
