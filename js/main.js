let name = prompt("Hello! Please input your name.");
console.log(`Welcome, ${name}`);

let birthYear = prompt("What year were you born?");
let currentYear = new Date().getFullYear();

console.log(`You are ${currentYear - birthYear} years of age`);

let number1 = parseInt(prompt("Input first number"));
let number2 = parseInt(prompt("Input second number"));

let response = `Addition: ${number1} + ${number2} = ${
  number1 + number2
} \n Subtraction: ${number1} - ${number2} = ${
  number1 - number2
} \n Multiplication: ${number1} * ${number2} = ${
  number1 * number2
}\n Division: ${number1} / ${number2} = ${number1 / number2}`;

alert(response);
