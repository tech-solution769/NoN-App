const keys = document.querySelectorAll('.key');
const checkBox = document.querySelector('.checkbox__keys');
const Switcher = document.querySelector('.switcher');
const KeySection = document.querySelector('.piano__keys');

const playNote = (note) => {
  const audio = new Audio(`../notes/${note}.wav`);
  audio.currentTime = 0;
  audio.play();
};

const handleMouseDown = (key) => {
  playNote(key.getAttribute('data-note'));
  
  if (key.className.includes('black')) {
    key.classList.add('black--pressed');
    return;
  }
  
  key.style.background = '#ddd';
};

const handleMouseUp = (key) => {
  
  if (key.className.includes('black')) {
    key.classList.remove('black--pressed');
    return;
  }
  
  key.style.background = 'white';
};

keys.forEach((key) => {
  
  key.addEventListener('mousedown', () => handleMouseDown(key));
  
  key.addEventListener('mouseup', () => handleMouseUp(key));
  
  key.addEventListener('touchstart', () => handleMouseDown(key));
  
  key.addEventListener('touchend', () => handleMouseUp(key));
  
});

checkBox.addEventListener('change', ({ target }) => {
  if (target.checked) {
    Switcher.classList.add('switcher--active');
    KeySection.classList.remove('disabled--keys');
    return;
  }
  
  Switcher.classList.remove('switcher--active');
  KeySection.classList.add('disabled--keys');
});