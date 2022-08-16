// step 1  withdraw button get withevent handleer

document.getElementById("btn-withdraw").addEventListener("click",function(){
     const withdrawField = document.getElementById("withdraw-field");
     const newWithdrawAmountString = withdrawField.value;
     const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    //  step 3

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const withdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString)

    // step-4

    const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;

    // step -5 : update total withdraw

    withdrawTotalElement.innerText = currentTotalWithdraw;

    // step - 6  : total balance update 
    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString);

    const UpdateBalanceTotal =  previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = UpdateBalanceTotal;

    // step - 7: clear input field

    withdrawField.value = "";
})