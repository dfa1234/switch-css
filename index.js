import './style.css';

const inputMyCheck = document.getElementById('mycheck');
inputMyCheck.addEventListener('change', function () {
  console.log(this.value);

  if (this.value === 'on') {
    this.value = 'off';
  } else {
    this.value = 'on';
  }
});
