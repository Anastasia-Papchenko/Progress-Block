const progressContainer = document.getElementById('progressContainer');
const progressCircle = document.getElementById('progressCircle');
const valueInput = document.getElementById('valueInput');
const animateCheckbox = document.getElementById('animateCheckbox');
const hideCheckbox = document.getElementById('hideCheckbox');
const fgCircle = document.querySelector('.progress-circle .fg');


const radius = 60;

const circumference = 2 * Math.PI * radius;

fgCircle.style.strokeDasharray = circumference;


function updateProgress(value) {
  const offset = circumference - (value / 100) * circumference;
  fgCircle.style.strokeDashoffset = offset;
}


function updateAnimatedState() {
  if (animateCheckbox.checked) {
    progressContainer.classList.add('animated');
  } else {
    progressContainer.classList.remove('animated');
  }
}


function updateHiddenState() {
  if (hideCheckbox.checked) {
    progressCircle.classList.add('hidden');
  } else {
    progressCircle.classList.remove('hidden');
  }
}

updateProgress(valueInput.value);

valueInput.addEventListener('input', (e) => {
  const newValue = Math.max(0, Math.min(100, e.target.value));
  
  e.target.value = newValue;
  updateProgress(newValue);
});

animateCheckbox.addEventListener('change', updateAnimatedState);
hideCheckbox.addEventListener('change', updateHiddenState);
