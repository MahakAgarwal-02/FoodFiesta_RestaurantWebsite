const form=document.getElementById("loginForm");

if(form){

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const button=document.querySelector(".auth-btn");

button.disabled=true;

button.innerText="Logging in...";

const formData=new FormData(form);

const data=Object.fromEntries(formData.entries());

try{

const response=await fetch("/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

const result=await response.json();

if(result.success){

Swal.fire({

icon:"success",

title:"Welcome!",

text:result.message,

confirmButtonColor:"#ff6b35"

}).then(()=>{

window.location.replace("/");

});

}

else{

Swal.fire({

icon:"error",

title:"Login Failed",

text:result.message,

confirmButtonColor:"#ff6b35"

});

}

}catch(err){

Swal.fire({

icon:"error",

title:"Server Error",

text:"Please try again."

});

}

button.disabled=false;

button.innerText="Login";

});

}