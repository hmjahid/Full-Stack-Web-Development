function discountAmount(discount){

    let listPrice = document.getElementById("list_price").value;

    let netPrice = listPrice - discount;

    document.getElementById("net_price").value = netPrice;
}