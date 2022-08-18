// step-1 add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2 get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field')

    // step2.5 converting the text input into a number using parseFloat
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // step-7 clear the input field
    withdrawField.value = '';

    // if user gives something otherthan a number
    if (isNaN(newWithDrawAmount)) {
        alert('Not a number');
        return;
    }

    // step-3 get previous withdraw amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // step-5 get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithDrawAmount > previousBalanceTotal) {
        alert('Insufficient fund');
        return;
    }

    // step-4 calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6 calculate the new balance total
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-6.5 set the new balance total



});