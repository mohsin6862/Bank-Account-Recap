document.getElementById('Withdraw-btn').addEventListener('click', function(){
    
    
    const newWithdrawAmount = getInputValue('withdraw-field');


    const previousWithdrawAmount = getElementInnerText('Withdraw-amount');


    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;

    setNewValueById('Withdraw-amount',totalWithdraw);



    const previousBalance = getElementInnerText('savings');
  
    const currentBalance = previousBalance - newWithdrawAmount;

    setNewValueById('savings', currentBalance);
    
})

