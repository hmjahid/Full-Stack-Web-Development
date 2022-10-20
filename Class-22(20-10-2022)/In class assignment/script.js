function discountSum(discount){
    let listedPrice = document.getElementById("listed_price").value;

    let discountedPrice = listedPrice - discount ;

    document.getElementById("discounted_price").value = discountedPrice ;
}