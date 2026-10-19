// ==============================
// ADD TO CART
// ==============================

const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const item = {

            id: button.dataset.id,

            name: button.dataset.name,

            price: Number(button.dataset.price),

            image: button.dataset.image,

            quantity: 1

        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(product => product.id === item.id);

        if(existing){

            existing.quantity++;

        }else{

            cart.push(item);

        }

        localStorage.setItem("cart", JSON.stringify(cart));
        
        updateCartCount();

        Swal.fire({

            icon:"success",

            title:"Added to Cart",

            text:`${item.name} added successfully!`,

            timer:1500,

            showConfirmButton:false

        });

    });

});


// ==============================
// SHOW CART
// ==============================

const cartContainer = document.getElementById("cartContainer");

if(cartContainer){

    renderCart();

}

function renderCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        cartContainer.innerHTML = `

        <div class="empty-cart">

            <h2>Your Cart is Empty 🛒</h2>

            <p>Add your favourite dishes and enjoy delicious food.</p>

            <a href="/menu" class="continue-btn">

                Browse Menu

            </a>

        </div>

        `;

        document.getElementById("subtotal").innerText = "₹0";
        document.getElementById("tax").innerText = "₹0";
        document.getElementById("grandTotal").innerText = "₹0";

        return;
    }

    let subtotal = 0;

    let html = "";

    cart.forEach((item, index) => {

        subtotal += item.price * item.quantity;

        html += `

        <div class="cart-card">

            <img src="${item.image}" class="cart-image" alt="${item.name}">

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p class="cart-category">Food Fiesta Special</p>

                <div class="cart-price">
                    ₹${item.price}
                </div>

            </div>

            <div class="quantity-box">

                <button class="qty-btn" onclick="changeQty(${index},-1)">−</button>

                <span class="qty">${item.quantity}</span>

                <button class="qty-btn" onclick="changeQty(${index},1)">+</button>

            </div>

            <div class="cart-right">

                <div class="item-total">

                    ₹${item.price * item.quantity}

                </div>

                <button class="delete-btn"
                    onclick="removeItem(${index})">

                    <i class="fas fa-trash-alt"></i>

                </button>

            </div>

        </div>

        `;

    });

    cartContainer.innerHTML = html;

    let tax = Math.round(subtotal * 0.05);

    let total = subtotal + tax;

    document.getElementById("subtotal").innerText = "₹" + subtotal;

    document.getElementById("tax").innerText = "₹" + tax;

    document.getElementById("grandTotal").innerText = "₹" + total;

}

function changeQty(index,value){

    let cart=JSON.parse(localStorage.getItem("cart"));

    cart[index].quantity+=value;

    if(cart[index].quantity<=0){

        cart.splice(index,1);

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    renderCart();

}


function removeItem(index){

    let cart=JSON.parse(localStorage.getItem("cart"));

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    renderCart();

}


function updateCartCount(){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((sum,item)=>sum+item.quantity,0);

    const badge = document.getElementById("cartCount");

    if(badge){

        badge.innerText = totalItems;

        if(totalItems===0){

            badge.style.display="none";

        }else{

            badge.style.display="flex";

        }

    }

}

updateCartCount();


const checkoutBtn = document.getElementById("checkoutBtn");

if(checkoutBtn){

    checkoutBtn.addEventListener("click",()=>{

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if(cart.length===0){

            Swal.fire({

                icon:"warning",

                title:"Cart Empty",

                text:"Please add some items first."

            });

            return;

        }

        Swal.fire({

            icon:"success",

            title:"Order Placed Successfully! 🎉",

            text:"Thank you for ordering from Food Fiesta.",

            confirmButtonColor:"#ff6b35"

        }).then(()=>{

            localStorage.removeItem("cart");

            updateCartCount();

            location.reload();

        });

    });

}