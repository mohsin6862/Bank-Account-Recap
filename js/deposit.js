console.log("this is java script file")

document.getElementById('deposit-btn').addEventListener('click',function(){

    const newDeposit = document.getElementById('new-deposit');
    const newDepositString = newDeposit.value;
    const newDepositAmount = parseFloat(newDepositString);

    newDeposit.value ='';
   
    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositString = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);
    

    const totalDeposit = newDepositAmount + previousDepositAmount;
    previousDeposit.innerText = totalDeposit;


    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);


    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;
    previousBalance.innerText = currentBalanceTotal;
})