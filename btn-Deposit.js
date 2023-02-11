document.getElementById('btn-Deposit').addEventListener('click',function(){
    const depositText = document.getElementById('Deposit-text');
    const Deposit = depositText.value;

    const depoTotalElement = document.getElementById('depo-total');
    const depoTotal = depoTotalElement.innerText;
    const depoAmount = parseFloat(depoTotal) + parseFloat(Deposit);
        depoTotalElement.innerText = depoAmount;

});

//withdraw it.....

document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const depositText = document.getElementById('Withdraw-text');
    const Deposit = depositText.value;

    const depoTotalElement = document.getElementById('with-total');
    const depoTotal = depoTotalElement.innerText;
    const depoAmount = parseFloat(depoTotal) + parseFloat(Deposit);
        depoTotalElement.innerText = depoAmount;

});
