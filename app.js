const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

billAmount.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

cashGiven.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]

function showDivCash() {
    document.getElementById("hideDivCash").style.display = "block";
 }

 function showDivChange() {
    document.getElementById("hideDivChange").style.display = "block";
 }


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    var billAm = Number(billAmount.value);
    var cashGi = Number(cashGiven.value);
    hideMessgae();
    if (billAm > 0) {
        if (cashGi >= billAm) {
            const amountToBeReturned = cashGi - billAm;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided should be equal or more than the bill amount");
        }
    } else {
        showMessage("Invalid Bill Amount")
    }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
};

function hideMessgae() {
    message.style.display = "none";
};

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
};