function init() {
  //variaveis
  let openCookieBtn = document.querySelector('#open-cookie-btn');
  let openAnotherCookieBtn = document.querySelector('#open-another-cookie-btn');
  let homeFrame = document.querySelector('#home-frame');
  let messageFrame = document.querySelector('#message-frame');

  function toggleFrame() {
    homeFrame.classList.toggle('hide');
    messageFrame.classList.toggle('hide');
  }

  //eventos
  openCookieBtn.addEventListener('click', toggleFrame);
  openAnotherCookieBtn.addEventListener('click', toggleFrame);
}

document.addEventListener('DOMContentLoaded', init); //init é uma funcao callback!