const login_button = document.getElementById('login__button');
const pop_up = document.querySelector('.pop-up'); 
const transition_elements = document.querySelectorAll('.for_transition');

const sign_in__button = document.querySelector('.pop-up__submit-button');
const email_input = document.querySelector('.email__input');
const password_input = document.querySelector('.password__input');

const register = document.querySelector('.pop-up__register_button');
const login = document.querySelector('.pop-up__login_button');
const pop_up__header = document.querySelector('.pop-up__header');
const hidden_el = document.querySelectorAll('.hidden_el');
const questsion = document.querySelector('.questsion');
const forgot = document.querySelector('.pop-up__forgot_password');

login_button.addEventListener('click', () => {            // Функция появления Pop Up
  pop_up.classList.toggle('hidden');                     
  window.onscroll = function () { window.scrollTo(0, 0); };       
  transition_elements.forEach((el) => {                  // Добавляет транзишн для нужных эл.
    el.classList.toggle('transition');
  })
  if (pop_up__header.innerHTML == 'Log in to your account') {
    hidden_el.forEach((el) => {
      el.style.visibility = 'visible';
      el.style.display = 'flex';
    });
  }
  forgot.style.display = 'inline';
});

pop_up.addEventListener('click', (event) => {          // Функция скрытия Pop Up
  if (event.target.classList.contains('pop-up')) {
    transition_elements.forEach((el) => {              // Удаляет транзишн для нужных эл.(чтобы не было задержки когда окно закрывается)
      el.classList.toggle('transition');
    })
    pop_up.classList.toggle('hidden'); 
    hidden_el.forEach((el) => {
      el.style.visibility = 'hidden';
      el.style.display = 'none';
    });               
    window.onscroll = false;             
  }
});

sign_in__button.addEventListener('click', () => {     // Функция аллерта эмейла и пароля
  let email = email_input.value;
  let password = password_input.value;
  alert(`Email: ${email}\nPassword: ${password}`);
});

register.addEventListener('click', () => {
  pop_up__header.innerHTML = 'Create account';
  hidden_el.forEach((el) => {
    el.style.visibility = 'hidden';
    el.style.display = 'none';
  });
  sign_in__button.innerHTML = 'Sign Up';
  questsion.innerHTML = 'Already have an account? ';
  login.classList.toggle('hidden');
  register.classList.toggle('hidden');
  register.style.display = 'none';
});
login.addEventListener('click', () => {
  pop_up__header.innerHTML = 'Log in to your account';
  hidden_el.forEach((el) => {
    el.style.visibility = 'visible';
    el.style.display = 'flex';
  });
  sign_in__button.innerHTML = 'Sign In';
  questsion.innerHTML = 'Don’t have an account? ';
  login.classList.toggle('hidden');
  register.classList.toggle('hidden');
  register.style.display = 'inline';
  forgot.style.display = 'inline';
});