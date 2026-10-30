
// 1 ---------

let degree = prompt("Enter Degree!")

if (degree > 100 || degree < 0){
    console.log("Invalid Degree")
}
else if (degree >= 90) {
    console.log("Exellent");

}else if (degree >= 80) {
    console.log("Very Good");
    
}else if (degree >= 70) {
    console.log("Good");
    
}else if (degree >= 50) {
    console.log("pass");
    
}else if (degree >= 0) {
    console.log("fail");
}




// 2 ------------

let num1 = Number(prompt("Enter The First number:"));
let operator = prompt("Enter an operator (+, -, *, /, %):");
let num2 = Number(prompt("Enter the second number"));

if (operator === '+') {

    console.log(num1 + num2);

}else if (operator === '-') {

    console.log(num1 - num2);
    
}else if (operator === '*') {

    console.log(num1 * num2);
    
}else if (operator === '/') {

    if (num2 === 0) {
        console.log("Cannot divide by zero");
    }else {
        console.log(num1 / num2);
        
    }
    
}else if (operator === '%') {

    if (num2 === 0) {
        console.log("Cannot divide by zero");
    }else {
        console.log(num1 % num2);
        
    }
    
}else {
    console.log("Unknown operator");
    
}


// 3 ------------

// 2000 => leap year 
// 1900 => not a leap year 

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
   console.log(year + " is a leap year " );
    
}else {
    console.log(year + " is Not a leap year .");
}


// 4 ----------


let number = prompt("Enter a number to print its multiplication table: ");

for (let i = 0; i <= 12; i++) {
    let result = number * i ;
    console.log(number + " x " + i + " = " + result);
    //console.log('${number} x ${i} = ${result}');
}


// 5 -----------

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= 50; i++) {
    
    if (i % 2 === 0) {
        evenSum += i;
    }else {
        oddSum += i;
    }
    
}

console.log("Sum of even numbers (1 to 50) is: " + evenSum)
console.log("Sum of odd numbers (1 to 50) is: " + oddSum)



// 6 -------------------


for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        
    } else if (i % 3 === 0) {
        console.log("Fizz");
        
    } else if (i % 5 === 0) {
        console.log("Buzz");
        
    } else {
        console.log(i);
        
    }

}
  


// 7 -------------

const Password = "js2026";
let attempts = 0; 

while (attempts < 3) {
    let userpass = prompt("Enter your password:");

    if (userpass === Password) {
        console.log("Welcome");
        
    } else {
        attempts++;
        console.log("Wrong password. Try again.");
    }
}
if (attempts === 3) {
    console.log("Account Locked");
    
}



// 8 -----------------------

let num = 12345;
let reversed = "";

while (num > 0){
    let lastDigit = num % 10 ;
    reversed += lastDigit;
    num = (num - lastDigit) / 10;
}

console.log(reversed);