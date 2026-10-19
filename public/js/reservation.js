const dateInput = document.querySelector('input[name="date"]');

if (dateInput) {

    const today = new Date().toISOString().split("T")[0];

    dateInput.min = today;

}

const form = document.getElementById("reservationForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const button = document.querySelector(".reserve-btn");

    button.disabled = true;
    button.innerText = "Booking...";

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try {

        const response = await fetch("/reservation", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        if (result.success) {

            Swal.fire({

                icon: "success",

                title: "Success",

                text: result.message,

                confirmButtonColor: "#ff6b35"

            });

            form.reset();

        }

        else{

            Swal.fire({

                icon: "error",

                title: "Oops",

                text: result.message,

                confirmButtonColor: "#ff6b35"

            });

        }

    }

    catch(err){

        Swal.fire({

            icon:"error",

            title:"Server Error",

            text:"Please try again later.",

            confirmButtonColor:"#ff6b35"

        });

    }

    button.disabled = false;

    button.innerText = "Reserve Table";

});