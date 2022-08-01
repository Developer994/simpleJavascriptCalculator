// // Calculator
// // First, we hardcode the app by creating dummy data
// // Create variable for the first and second hardcoded inputs.
// // Since the hardcoded inputs have worked, lets now do som
// // DOM manipulation.
// // Output the answer inside a div:
// // Add the output into the switch statement

document.querySelector('#submit').addEventListener('click', function () {
  let firstInput = Number(document.querySelector('.calcInput1').value);
  let operator = document.querySelector('.calcOperator').value;
  let secondInput = Number(document.querySelector('.calcInput2').value);

  switch (operator) {
    case '/':
      const divide = firstInput / secondInput;
      document.querySelector('.output').textContent = divide.toFixed(2);
      break;
    case '*':
      const multiply = firstInput * secondInput;
      document.querySelector('.output').textContent = multiply.toFixed(2);
      break;
    case '+':
      const add = firstInput + secondInput;
      document.querySelector('.output').textContent = add.toFixed(2);
      break;
    case '-':
      const minus = firstInput - secondInput;
      document.querySelector('.output').textContent = minus.toFixed(2);
      break;
    default:
      alert('No/Invalid Operator');
      break;
  }
});
