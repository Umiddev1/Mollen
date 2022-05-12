let elHeaderBtn = document.querySelector('.mollen__header-btn');
let elModalMenu = document.querySelector('.mollen__menu');
let elMollenCloseBtn = document.querySelector('.mollen__menu-close');
elHeaderBtn.addEventListener("click", handleModal);
elMollenCloseBtn.addEventListener("click", handleClose);

function handleModal() {
  elModalMenu.classList.add('show-open');
}

function handleClose() {
  elModalMenu.classList.remove('show-open');
}