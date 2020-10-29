//values
//=============================

let compensationBeforeFees = 0;
let compensationAfterFees = 0;
let rateOfFees = 0;
let tax = 0;
let rateOfTax = 0;
let fees = 0;
let feesIncludeTax = 0;

// input numbers from custumer
//=============================
compensationBeforeFees = parseInt(prompt("Please insert the compensation"));
rateOfFees = prompt("Please insert the rate of fees in %");
rateOfTax = prompt("Please insert the rate of tax");

//conver numbers into %
//=============================
rateOfFees = rateOfFees / 100;
rateOfTax = rateOfTax / 100;

// calculating 
//=============================
fees = compensationBeforeFees * rateOfFees;
fees = parseInt(fees);
tax = fees * rateOfTax;
tax = parseInt(tax);
feesIncludeTax = fees + tax;
compensationAfterFees = compensationBeforeFees - feesIncludeTax;


//convert numbers into strings
//==============================
compensationBeforeFees = formatNumber(compensationBeforeFees);
fees = formatNumber(fees);
tax = formatNumber(tax);
feesIncludeTax = formatNumber(feesIncludeTax);
compensationAfterFees = formatNumber(compensationAfterFees);

// showing results 
//===============================
alert("Compensation before fees = " + compensationBeforeFees + " NIS" + " | Fees = " + fees + " NIS" + " | Tax = " + tax + " NIS" + " | Fees inculding tax = " + feesIncludeTax + " NIS" + " | compensation after fees = " + compensationAfterFees + " NIS")


//functions 
//===============================
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
