import './style.css';

const inputMyCheck = document.getElementById('mycheck');
console.log('mycheck is', inputMyCheck.checked);

inputMyCheck.addEventListener('change', function () {
  console.log('mycheck is', this.checked);
});

const inputMyCheck2 = document.getElementById('mycheck2');
console.log('mycheck2 is', inputMyCheck2.checked);

inputMyCheck2.addEventListener('change', function () {
  console.log('mycheck2 is', this.checked);
});

const inputMyCheck3 = document.getElementById('mycheck3');
console.log('mycheck3 is', inputMyCheck3.checked);

inputMyCheck3.addEventListener('change', function () {
  console.log('mycheck3 is', this.checked);
});
