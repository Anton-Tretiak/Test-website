console.log('1. Вёрстка соответствует макету. Ширина экрана 390px +48 \n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nпри ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку плавно появляется адаптивное меню +4\nадаптивное меню соответствует макету +2(выполнено частично)\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2(выполнено частично) (все кроме Account, она пока что просто закрывает меню)\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +0\nScore: 77');
// Бургер меню
const account = document.querySelectorAll('.menu-account');
const checkbox = document.getElementById('chk')
const menu_area = document.querySelector('.menu-area');
const body = document.getElementById('body');
const html = document.getElementById('html');

checkbox.addEventListener('click', () => {
  menu_area.classList.toggle('hidden-menu-area');
  body.classList.toggle('menu-opened');
  html.classList.toggle('menu-opened');
});
menu_area.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu-area')) {
    menu_area.classList.toggle('hidden-menu-area');
    checkbox.checked = false;
    body.classList.toggle('menu-opened'); 
    html.classList.toggle('menu-opened');
  }
});
account.forEach((el) => {
  el.addEventListener('click', () => {
    checkbox.checked = false;
    menu_area.classList.toggle('hidden-menu-area');
    body.classList.toggle('menu-opened');
    html.classList.toggle('menu-opened');
  });
})