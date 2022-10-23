function priceCalculation(price, qty){
    return price*qty;
}

document.getElementById("totalPrice").innerHTML = priceCalculation(100, 5);
