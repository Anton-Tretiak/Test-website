const first_slide = document.querySelector('.first_dest'),
      second_slide = document.querySelector('.second_dest'),
      third_slide = document.querySelector('.third_dest');
const first_dot = document.querySelector('.first_dot'),
      second_dot = document.querySelector('.second_dot'),
      third_dot = document.querySelector('.third_dot');

first_slide.addEventListener('click', () => {
  first_slide.classList.add('translate_right');
  second_slide.classList.add('translate_right');
  third_slide.classList.add('translate_right');

  first_dot.classList.add('active_dot');
  second_dot.classList.add('not_active_dot');

  if (first_slide.classList.contains('translate_right')) {
    second_slide.addEventListener('click', () => {
      first_slide.classList.remove('translate_right');
      second_slide.classList.remove('translate_right');
      third_slide.classList.remove('translate_right');

      first_dot.classList.remove('active_dot');
      second_dot.classList.remove('not_active_dot');
    });
  }
});

third_slide.addEventListener('click', () => {
  first_slide.classList.add('translate_left');
  second_slide.classList.add('translate_left');
  third_slide.classList.add('translate_left');

  third_dot.classList.add('active_dot');
  second_dot.classList.add('not_active_dot');
  
  if (first_slide.classList.contains('translate_left')) {
    second_slide.addEventListener('click', () => {
      first_slide.classList.remove('translate_left');
      second_slide.classList.remove('translate_left');
      third_slide.classList.remove('translate_left');

      third_dot.classList.remove('active_dot');
      second_dot.classList.remove('not_active_dot');
    });
  }
});

// Dots click
first_dot.addEventListener('click', () => {
  first_slide.classList.add('translate_right');
  second_slide.classList.add('translate_right');
  third_slide.classList.add('translate_right');

  first_dot.classList.add('active_dot');
  second_dot.classList.add('not_active_dot');

  if (first_slide.classList.contains('translate_right')) {
    second_dot.addEventListener('click', () => {
      first_slide.classList.remove('translate_right');
      second_slide.classList.remove('translate_right');
      third_slide.classList.remove('translate_right');

      first_dot.classList.remove('active_dot');
      second_dot.classList.remove('not_active_dot');
    });
  }
});

third_dot.addEventListener('click', () => {
  first_slide.classList.add('translate_left');
  second_slide.classList.add('translate_left');
  third_slide.classList.add('translate_left');

  third_dot.classList.add('active_dot');
  second_dot.classList.add('not_active_dot');
  
  if (first_slide.classList.contains('translate_left')) {
    second_dot.addEventListener('click', () => {
      first_slide.classList.remove('translate_left');
      second_slide.classList.remove('translate_left');
      third_slide.classList.remove('translate_left');

      third_dot.classList.remove('active_dot');
      second_dot.classList.remove('not_active_dot');
    });
  }
});