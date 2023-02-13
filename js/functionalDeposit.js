document.getElementById('deposit-btn').addEventListener('click',function(){


    const newInputAmount = getInputValue('deposit-field');


    const previousDepositAmount = getElementInnerText('previous-deposit');
 
    const totalDepositAmount = previousDepositAmount + newInputAmount;


    setNewValueById('previous-deposit', totalDepositAmount);

    const previousBalance = getElementInnerText('savings');

    const currentBalance = previousBalance + newInputAmount;

    setNewValueById('savings', currentBalance);
    
})