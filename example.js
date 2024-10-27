const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question to the user
rl.question('What is your salary? ', (answer) => {
  const salary = answer
  console.log(paye(salary))

  
  
  // Close the interface after receiving the answer
  rl.close();
});    
    function paye(income) {
        if (income <= 24000) {
            return income*0.1
        } else if (income <= 32333) {
            return income* 0.25;
        } else if (income <= 500000) {
            return income*0.3;
        } else if (income <= 800000) {
            return income*0.325;
        } else {
            return income*0.35;
        }
    }
    function NHIF (grossPay) {
        if (grossPay <= 5999) {
            return 150;
        } else if (grossPay <= 7999) {
            return 300;
        } else if (grossPay <= 11999) {
            return 400;
        } else if (grossPay <= 14999) {
            return 500;
        } else if (grossPay <= 19999) {
            return 600;
        } else if (grossPay <= 24999) {
            return 750;
        } else if (grossPay <= 29999) {
            return 850;
        } else if (grossPay <= 34999) {
            return 900;
        } else if (grossPay <= 39999) {
            return 950;
        } else if (grossPay <= 44999) {
            return 1000;
        } else if (grossPay <= 49999) {
            return 1100;
        } else if (grossPay <= 59999) {
            return 1200;
        } else if (grossPay <= 69999) {
            return 1300;
        } else if (grossPay <= 79999) {
            return 1400;
        } else if (grossPay <= 89999) {
            return 1500;
        } else if (grossPay <= 99999) {
            return 1600;
        } else {
            return 1700;
        }
    }
    function nssf(salary){
        return 0.06*salary
    }
    
