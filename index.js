import './style.css';

const inputMyCheck1 = document.getElementById('mycheck1');
console.log('Start: mycheck1 is', inputMyCheck1.checked);

inputMyCheck1.addEventListener('change', function () {
  console.log('mycheck1 is now', this.checked);
});

const inputMyCheck2 = document.getElementById('mycheck2');
console.log('Start: mycheck2 is', inputMyCheck2.checked);

inputMyCheck2.addEventListener('change', function () {
  console.log('mycheck2 is now', this.checked);
});
