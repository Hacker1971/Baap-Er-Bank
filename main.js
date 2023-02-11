document.getElementById('btn-submit').addEventListener('click',function(){
    // email input ....
    const emailfield = document.getElementById('user-email');
    const email=emailfield.value;
    //get password....
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //login form
    if(email === 'tanvir@gmail.com' && password ==='12345'){
        window.location.href = "bank.html";
    } else{
        alert('tui amr sontan na');
        
    }
});
