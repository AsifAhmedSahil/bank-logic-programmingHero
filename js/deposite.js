document.getElementById("btn-deposite").addEventListener("click", function(){
    // step 2: get deposite amount from deposite field
    const depositeField = document.getElementById("deposite-field");
    const depositeAmount = depositeField.value;

    // step 3 : get the current deposite total

    const depositeTotalAmount = document.getElementById("deposite-total");
    const depositeTotal = depositeTotalAmount.innerText;
    depositeTotalAmount.innerText = depositeAmount;

})