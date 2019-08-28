
// input numbers from custumer
//=============================


let compensationBeforeFees = document.getElementById("inputCompensation");
let rateOfFees = document.getElementById("inputRateOfFees");
let rateOfTax = document.getElementById("inputRateOfTax");

const DOM = {
    form: document.getElementById("form"),
    resultFees: document.getElementById("fees"),
    resultCompensation: document.getElementById("compensation"),
    comBeforeFees: document.getElementById("comBeforeFees"),
    inputExpenses: document.getElementById("inputExpenses")
}


//convert numbers into %
//=============================
function convert(rate) {
    rate = rate / 100;
    return rate;
}



// calculating 
//=============================

function calculateFeesIncludeTax(feesIncludeTax) {
    let compBeforeFees = compensationBeforeFees.value;

    let fees = compBeforeFees * convert(rateOfFees.value);
    let tax = fees * convert(rateOfTax.value);

    feesIncludeTax = fees + tax;

    return feesIncludeTax;
}

document.querySelector("#calcBtn").addEventListener("click", calculatecompAfterTax);

function calculatecompAfterTax() {
    const { form, resultFees, resultCompensation, comBeforeFees, inputExpenses } = DOM;

    let compBeforeFees = compensationBeforeFees.value;
    let expenses = inputExpenses.value;

    let feesIncludeTax = calculateFeesIncludeTax();
    let compensationAfterFees = compBeforeFees - feesIncludeTax - expenses;

    const com_before_fees = numbersToStrings(financial(compBeforeFees));
    const com_after_fees = numbersToStrings(financial(compensationAfterFees));
    const fees_include_tax = numbersToStrings(financial(feesIncludeTax))

    resultCompensation.innerText = "";
    resultFees.innerText = "";
    comBeforeFees.innerText = "";

    resultCompensation.append(com_after_fees);
    resultFees.append(fees_include_tax);
    comBeforeFees.append(com_before_fees);

    //form.reset();
}


function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}



//convert numbers into strings
//==============================

function numbersToStrings(numberType) {
    return numberType.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}





//functions 
//===============================
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}



// // buttons events
// //================================

// document.querySelector("#reset").addEventListener("click", reset);

// function reset() {
//      const reset = document.querySelector("#compensation", "fees");
//      reset = reset.innerHTML = "";
// }


