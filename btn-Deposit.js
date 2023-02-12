 const  currentBlance = document.getElementById('blance-total');
 let totalBlance = 1240;
 let totalDeposite = 0;
 let totalWidtdrow  = 0;

 //! totalDeposite....
  document.getElementById('btn-Deposit').addEventListener('click',function(){
       const depositValue = document.getElementById('Deposit-text').value;
       const depositBlance = document.getElementById('depo-total');
        if(depositValue> 0){
          totalDeposite+= parseFloat(depositValue);
          depositBlance.innerText = `${totalDeposite}`
          totalBlance+=parseFloat(depositValue)
          currentBlance.innerText =`${totalBlance}`
          
          document.getElementById('Deposit-text').value='';

        }
  });
  //* totalWidtdrow .....
  document.getElementById("btn-Withdraw").addEventListener("click", function () {
    const widtdrowValue = document.getElementById("Withdraw-text").value;
    const witdrowBlance = document.getElementById("with-total")

    if(widtdrowValue>0 && widtdrowValue <= totalBlance){
        totalWidtdrow += parseFloat(widtdrowValue)
        witdrowBlance.innerText = `${totalWidtdrow}`
        totalBlance -= parseFloat(widtdrowValue)
        currentBlance.innerText = `${totalBlance}`
        document.getElementById("Withdraw-text").value = ""
    }

})

