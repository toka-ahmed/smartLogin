let welcomeMassage=document.getElementById('welcomeMassage');
let logOutBtn=document.getElementById('logOutBtn');

if(localStorage.getItem('username') != null)
{
    welcomeMassage.innerHTML = `Welcome ${localStorage.getItem('username')}`
}

function logOut()
{
    //navigate login page
    //remove userName from localstorage
    window.location.href='index.html';
    localStorage.removeItem('username');
}
logOutBtn.addEventListener('click',logOut)