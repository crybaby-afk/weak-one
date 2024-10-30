//function calculateNetSalary(basicSalary, benefits) {
    
//         const PAYE_RATE = 0.1; 
//         const NSSF_RATE = 0.06; 
//         const NHIF_AMOUNT = 500; 

//     const grossSalary = basicSalary + benefits;

   
//     const paye = grossSalary * PAYE_RATE;

//     const nssf = grossSalary * NSSF_RATE;

//     const nhif = NHIF_AMOUNT;


//     const totalDeductions = paye + nssf + nhif;

   
//     const netSalary = grossSalary - totalDeductions;


//     console.log("Gross Salary:", grossSalary);
//     console.log("PAYE (Tax):", paye);
//     console.log("NSSF Deduction:", nssf);
//     console.log("NHIF Deduction:", nhif);
//     console.log("Total Deductions:", totalDeductions);
//     console.log("Net Salary:", netSalary);

//     return {
//         grossSalary,
//         paye,
//         nssf,
//         nhif,
//         totalDeductions,
//         netSalary
//     };
// }
// calculateNetSalary(50000, 10000);

/*function paye(income) {
    if (income <= 24000) {
        return 10;
    } else if (income <= 32333) {
        return 25;
    } else if (income <= 500000) {
        return 30;
    } else if (income <= 800000) {
        return 32.5;
    } else {
        return 35;
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
}*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getpaye(){
    rl.question(`Input gross salary:`, (Salary)=>{
        //let paye = percentage * salary;
        //let percentage = 0;
        if (Salary <= 24000){
            console.log(`Your paye is ` + ` `  + (0.1 * Salary));
        } else {
            percentage = 0.35;
            console.log(`Your paye is ` + ` `  +(0.1 * Salary) );
        }
    });
}
   
getpaye();