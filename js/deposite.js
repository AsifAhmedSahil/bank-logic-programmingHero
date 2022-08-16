document.getElementById("btn-deposite").addEventListener("click", function(){
    // step 2: get deposite amount from deposite field
    const depositeField = document.getElementById("deposite-field");
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString)
    // step 3 : get the current deposite total

    const depositeTotalAmount = document.getElementById("deposite-total");
    const previousDepositeTotalString = depositeTotalAmount.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString)

    //step - 4:  add number to set the total deposite

    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    // set the deposite total

    depositeTotalAmount.innerText = currentDepositeTotal;

    // step -5 : get balance current total

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step - 6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    depositeField.value = "";

})