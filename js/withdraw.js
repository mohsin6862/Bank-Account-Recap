document.getElementById('withdraw-btn').addEventListener('click',function(){

    const newWithdraw = document.getElementById('new-withdraw');
    const newWithdrawString = newWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    newWithdraw.value = '';


    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);


    const totalWithdraw = newWithdrawAmount +  previousWithdrawAmount;
    previousWithdraw.innerText = totalWithdraw;

    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    previousBalance.innerText = currentBalanceTotal;
})