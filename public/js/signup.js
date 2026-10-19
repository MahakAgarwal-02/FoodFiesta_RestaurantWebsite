const form = document.getElementById("signupForm");

if(form){

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const button=document.querySelector(".auth-btn");

button.disabled=true;

button.innerText="Creating...";

const formData=new FormData(form);

const data=Object.fromEntries(formData.entries());

try{

const response=await fetch("/signup",{

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

title:"Success",

text:result.message,

confirmButtonColor:"#ff6b35"

}).then(()=>{

window.location="/login";

});

}

else{

Swal.fire({

icon:"error",

title:"Oops",

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

button.innerText="Create Account";

});

}