const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const button = document.querySelector(".send-btn");

    button.disabled = true;

    button.innerText = "Sending...";

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try{

        const response = await fetch("/contact",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        const result = await response.json();

        if(result.success){

            Swal.fire({

                icon:"success",

                title:"Success",

                text:result.message,

                confirmButtonColor:"#ff6b35"

            });

            form.reset();

        }

        else{

            Swal.fire({

                icon:"error",

                title:"Oops",

                text:result.message,

                confirmButtonColor:"#ff6b35"

            });

        }

    }

    catch(error){

        Swal.fire({

            icon:"error",

            title:"Server Error",

            text:"Please try again later.",

            confirmButtonColor:"#ff6b35"

        });

    }

    button.disabled=false;

    button.innerText="Send Message";

});