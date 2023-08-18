'use strict'

let adders = document.querySelectorAll(".add-cart");

adders.forEach((adding) => {

    adding.addEventListener("click", (e)=>{

        addx(e.target);
    
    })
    
})

let clearButton = document.getElementsByClassName("clear-cart")[0];

clearButton.addEventListener('click', (e) => {
 
    clear();

})

let payButton = document.getElementsByClassName("pay-cart")[0];

payButton.addEventListener("click", (e)=>{

    pay(e.target);

})

function addx(target) {

    let order = document.createElement("div");
    order.classList.add("order-item");
    document.getElementById("cart-box").appendChild(order);

    let image = document.createElement("img");
    image = target.parentNode.querySelector("img");
    let image2 = image.cloneNode(true);
    order.appendChild(image2);

    let productName = document.createElement("p");
    productName.innerHTML = target.parentNode.getElementsByClassName("name")[0].innerHTML;
    order.appendChild(productName);

    let productPrice = document.createElement("p");
    productPrice = target.parentNode.getElementsByClassName("price")[0];
    productPrice.classList.add("productPrice");
    let price2 = productPrice.cloneNode(true);
    order.appendChild(price2);

    let payment = document.getElementsByClassName("pay-cart")[0].value;
    payment = Number(payment);
    let price = productPrice.innerHTML;
    price = Number(price);
    payment = payment+price;
    document.getElementsByClassName("pay-cart")[0].value = payment;

    let incrementDown = document.createElement("input");
    incrementDown.setAttribute("type", "button");
    incrementDown.value = "-";
    incrementDown.classList.add("lineButtons");
    order.appendChild(incrementDown);

    let productCount = document.createElement("p");
    productCount.innerHTML = "1"
    productCount.classList.add("product-count");
    order.appendChild(productCount);

    let incrementUp = document.createElement("input");
    incrementUp.setAttribute("type", "button");
    incrementUp.value = "+";
    incrementUp.classList.add("lineButtons");
    order.appendChild(incrementUp);

    let productCancel = document.createElement("input");
    productCancel.setAttribute("type", "button");
    productCancel.value = "X";
    productCancel.classList.add("lineButtons");
    order.appendChild(productCancel);

    incrementDown.addEventListener("click", (e)=>{

        down(e.target);
    
    })

    incrementUp.addEventListener("click", (e)=>{

        up(e.target);
    
    })

    productCancel.addEventListener("click", (e)=>{

        cancel(e.target);
    
    })

    target.disabled = true;
    target.value = "In Cart";

}

function down(target) {

    let count = target.parentNode.getElementsByClassName("product-count")[0].innerHTML;
    count = count-1;
    target.parentNode.getElementsByClassName("product-count")[0].innerHTML = count;

    let payment = document.getElementsByClassName("pay-cart")[0].value;
    payment = Number(payment);
    let price = target.parentNode.getElementsByClassName("productPrice")[0].innerHTML;
    price = Number(price);
    payment = payment-price;
    document.getElementsByClassName("pay-cart")[0].value = payment;

    if(count == 0) {

        target.parentNode.remove();

    }

}

function up(target) {

    let count = target.parentNode.getElementsByClassName("product-count")[0].innerHTML;
    count = Number(count);
    count +=1;
    target.parentNode.getElementsByClassName("product-count")[0].innerHTML = count;


    let payment = document.getElementsByClassName("pay-cart")[0].value;
    payment = Number(payment);
    let price = target.parentNode.getElementsByClassName("productPrice")[0].innerHTML;
    price = Number(price);
    payment = payment+price;
    document.getElementsByClassName("pay-cart")[0].value = payment;

}

function cancel(target) {

    let payment = document.getElementsByClassName("pay-cart")[0].value;
    payment = Number(payment);
    let price = target.parentNode.getElementsByClassName("productPrice")[0].innerHTML;
    price = Number(price);
    let count =  target.parentNode.getElementsByClassName("product-count")[0].innerHTML;
    payment = payment - (price*count);
    document.getElementsByClassName("pay-cart")[0].value = payment;

    target.parentNode.remove();

}

function clear() {

    let target = document.getElementById("cart-box");

    while(target.children[2]) {
        target.removeChild(target.children[2]);
    }

    document.getElementsByClassName("pay-cart")[0].value = "0.00";

    let buttons = document.querySelectorAll(".add-cart");

    buttons.forEach((button) => {

        button.disabled = false;
        button.value = "Add To Cart";
        
    })    
    
}

function pay() {

    let price = document.getElementsByClassName("pay-cart")[0].value;
    price = Number(price);
    alert("You Have Paid " + price);
    clear();

}