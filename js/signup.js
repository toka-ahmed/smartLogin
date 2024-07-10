let nameInput=document.getElementById('userNameInput')
let emailInput=document.getElementById('emailInput')
let passInput=document.getElementById('passwordInput')
let btnSignup=document.getElementById('signUpBtn')
let alertMassage = document.getElementById('alertMassage');
let usersArray=[];

if(localStorage.getItem('users')!=null){
    usersArray=JSON.parse(localStorage.getItem('users'))
}
 
function validateUsername(username) {
    const nameRegex = /^[a-zA-Z\-]+$/;
    return nameRegex.test(username);
}


function validateEmail(email) {
    const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    return emailRegex.test(email);
}
function validatePassward(passward) {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regularExpression.test(passward);
}

function signUp(){
    
    var nameinput = nameInput.value.trim();
     var email=emailInput.value.trim();
     var passward=passInput.value.trim();
    if (validatePassward(passward)&& validateUsername(nameinput) && validateEmail(email)){
        let data={
            userName:nameInput.value,
            email:emailInput.value,
            pass:passInput.value
        }
        if(checkInputEmpty()== true){
            getAlertMessage('All Inputs Required', 'red');
        }else{
            if(checkeEmailExist()==true){
                getAlertMessage('email already  exist','red')
            }
            else{
                usersArray.push(data)
                localStorage.setItem('users',JSON.stringify(usersArray))
                clearForm()
                getAlertMessage('Success', 'green');
            }
        }

    }else{
        window.alert('username or email or passward not correct')
    }

    
}

function getAlertMessage(text,color){
    alertMassage.classList.replace('d-none','d-block')
    alertMassage.innerHTML=text;
    alertMassage.style.color=color;
}
function clearForm(){
    nameInput.value='';
    emailInput.value='';
    passInput.value='';

}
function checkInputEmpty(){
    if(nameInput.value==''||emailInput.value==''|| passInput.value==''){
        return true;
    }else{
        return false;
    }
}
function checkeEmailExist(){
    for (let i = 0; i < usersArray.length; i++) {
      if(usersArray[i].email==emailInput.value)
        return true
        
    }
}
btnSignup.addEventListener('click',signUp)


