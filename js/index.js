
let emailLogInInput=document.getElementById('emailloginInput')
let passLogInInput=document.getElementById('passwordliginInput')
let btnlogIn=document.getElementById('loginbtn')
let alertMassage = document.getElementById('alertMassage');
let usersArray=[];

if(localStorage.getItem('users')!=null){
    usersArray=JSON.parse(localStorage.getItem('users'))
}
 

function login(){
   
    if(checkInputEmpty() == true){
        getAlertMessage('All Inputs Required', 'red');
    }else{
        if(checkePassward() ==true){
            window.location.href='home.html';
        }
        else{
          
            getAlertMessage('Email or Password notCorrect','red');
        }
    }
}

function getAlertMessage(text,color){
    alertMassage.classList.replace('d-none','d-block')
    alertMassage.innerHTML=text;
    alertMassage.style.color=color;
}

function checkInputEmpty(){
    if(emailLogInInput.value==''|| passLogInInput.value==''){
        return true;
    }else{
        return false;
    }
}
function checkePassward(){
    
    for (let i = 0; i < usersArray.length; i++) {
      if(usersArray[i].email == emailLogInInput.value && usersArray[i].pass == passLogInInput.value){ localStorage.setItem('username',usersArray[i].userName) 
        return true}
        
       
        
    }
}
btnlogIn.addEventListener('click',login)


