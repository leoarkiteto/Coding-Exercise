import './scss/main.scss';

// Selection HTML elements
const inputNumber = document.getElementById('number');
const result = document.getElementById('result');
const alertLine = document.querySelector('.calc__result .bottom_line');

// Conversion number to array;
const integerToArray = n => [...`${n}`].map(i => parseInt(i));

// Display output, based on type input
const showResult = (notNumber, fn) => {
  if (isNaN(notNumber)) {
    result.value = "ERROR! It's not a number!";
    result.style.color = 'red';
    alertLine.style.backgroundColor = 'red';
  } else {
    let intArr = fn(notNumber)
      .filter(i => i % 2)
      .reduce((acc, val) => acc + val, 0);
    console.log(intArr);

    result.value = intArr;
    result.style.color = 'blue';
    alertLine.style.backgroundColor = '';
  }
};

// Event to show result
inputNumber.addEventListener('change', e => {
  let numbInput = Math.abs(Number(e.target.value));

  showResult(numbInput, integerToArray);

  inputNumber.value = '';
});
