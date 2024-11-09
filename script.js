// global variables
let fullname=document.getElementById('name');
let email=document.getElementById('email');
let mob=document.getElementById('mobileNo');
let pswd=document.getElementById('password');
let uname=document.getElementById('uname');

function validate(event){
event.preventDefault();
// get values from the form
const nameval=document.getElementById('name').value;
const emailval=document.getElementById('email').value;
const mobval=document.getElementById('mobileNo').value;
const pswdval=document.getElementById('password').value;
const unameval=document.getElementById('uname').value;

// form validation

    if(nameval=='' || emailval=='' || mobval=='' || pswdval=='' || unameval==''){
        alert(`All fields are mandatory`);
    }
    else if(pswdval.length<6){
        alert('Password must be atleast 6 characters long');
    }
    else if(mobval.length!=10){
        alert('Mobile number must be 10 digits long');
    }
    else if(emailval.indexOf('@')<=0){
        alert('Invalid email');   
    }
    else{
        alert('Registration successful');
        setTimeout(() => {
            uname.value='';
            pswd.value='';
            mob.value='';
            email.value='';
            fullname.value='';
        }, 100);
        sign_up();
    }
}
function sign_up(){
    fullname.style.display='none';
    email.style.display='none';
    mob.style.display='none';
    document.querySelector('h2').innerHTML='Sign In';
    document.getElementById('register').innerHTML='Sign In';
    document.querySelector('p').innerHTML=`Don\'t have an account?<a href="#" id="signupbtn" 
    style="visibility: visible;" onclick="dsu()">Sign Up</a>`;
}
function dsu(){
    fullname.style.display='block';
    email.style.display='block';
    mob.style.display='block';
    document.querySelector('h2').innerHTML='Sign Up';
    document.getElementById('register').innerHTML='Sign Up';
    document.querySelector('p').innerHTML='Already have an account?<a href="#" id="loginbtn" onclick="asu()">Login</a>';
    
}
function asu(){
    sign_up();
}