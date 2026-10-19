// ==============================
// Category Filter
// ==============================

const buttons = document.querySelectorAll(".category-buttons button");
const menuItems = document.querySelectorAll(".menu-item");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        menuItems.forEach(item => {

            if (category === "All" || item.dataset.category === category) {

                item.style.display = "";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ==============================
// Search Function
// ==============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    menuItems.forEach(item => {

        const title = item.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {

            item.style.display = "";

        }

        else{

            item.style.display = "none";

        }

    });

});