
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
    inputExpenses: document.getElementById("inputExpenses"),
    resExpenses: document.getElementById("expense"),
    input_compensation: document.getElementById("inputCompensation"),
    input_compensation_err_msg: document.getElementById("inputCompensationMsg")
}


//convert numbers into %
//=============================
function convert(rate) {
    rate = rate / 100;
    return rate;
}

//validation
//=========================================================

$("#inputCompensation").on("input", function (event) {
    validation(event, "#inputCompensation")
})

$("#inputRateOfFees").on("input", function (event) {
    validation(event, "#inputRateOfFees")
})

$("#inputRateOfTax").on("input", function (event) {
    validation(event, "#inputRateOfTax")
})


function validation (event, element) {
    const { value } = event.currentTarget;
    while (value) {
        return $(element).removeClass("is-invalid")
    }
    return $(element).addClass("is-invalid")
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
    const { resultFees, resultCompensation, comBeforeFees, inputExpenses, resExpenses } = DOM;

    let compBeforeFees = compensationBeforeFees.value;
    if (!compBeforeFees) {
        compensationBeforeFees.classList.add("is-invalid");
    }
    if (!rateOfTax.value) {
        rateOfTax.classList.add("is-invalid");
    }
    if (!rateOfFees.value) {
        rateOfFees.classList.add("is-invalid");
    }

    if (!compBeforeFees || !rateOfTax.value || !rateOfFees.value) {
        return;
    } else {
        compensationBeforeFees.classList.remove("is-invalid");
        rateOfTax.classList.remove("is-invalid");
        rateOfFees.classList.remove("is-invalid");
    }

    let expenses = inputExpenses.value;


    let feesIncludeTax = calculateFeesIncludeTax();
    let compensationAfterFees = compBeforeFees - feesIncludeTax - expenses;

    const com_before_fees = numbersToStrings(financial(compBeforeFees));
    const com_after_fees = numbersToStrings(financial(compensationAfterFees));
    const fees_include_tax = numbersToStrings(financial(feesIncludeTax));
    let res_expenses = numbersToStrings(financial(expenses));
    if (isNaN(res_expenses)) {
        res_expenses = "0"
    } 


    resultCompensation.innerText = "";
    resultFees.innerText = "";
    comBeforeFees.innerText = "";
    resExpenses.innerText = "";

    resultCompensation.append(com_after_fees);
    resultFees.append(fees_include_tax);
    comBeforeFees.append(com_before_fees);
    resExpenses.append(res_expenses)
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




// restart form + results 
//================================================
$("#restartBtn").on("click", restartResults)

function restartResults() {
    const { resultFees, resultCompensation, comBeforeFees, resExpenses } = DOM;
    resultFees.innerText = "";
    resultCompensation.innerText = "";
    comBeforeFees.innerText = "";
    resExpenses.innerText = "";
}