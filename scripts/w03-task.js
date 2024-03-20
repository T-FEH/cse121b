/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers (){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
    // buttonElement.addEventListener("click", copyInput);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers (){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
    // buttonElement.addEventListener("click", copyInput);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

// Multiply numbers function (arrow function)
const multiplyNumbers = () => {
  const factor1 = Number(document.querySelector("#factor1").value);
  const factor2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(factor1, factor2);
};
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
// Get references to elements
const subtotalInput = document.querySelector("#subtotal");
const membershipCheckbox = document.querySelector("#member");
const totalSpan = document.querySelector("#total");
const getTotalDueButton = document.querySelector("#getTotal");

getTotalDueButton.addEventListener("click", calculateTotalDue);

function calculateTotalDue() {
  const subtotal = Number(subtotalInput.value);
  // Apply discount if membership is checked
  let total = subtotal;
  if (membershipCheckbox.checked) {
    total *= 0.8; // Apply 20% discount
  }

  totalSpan.textContent = `$${total.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numArray
.map(number => number * 2)
.reduce((sum, number) => sum + number);