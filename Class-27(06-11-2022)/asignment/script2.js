function userInput(){
    let y = document.getElementById('price').value;

    if(y > 0){
    document.getElementById('result').innerHTML = 'The submitted price is = ' +y;
}else{
    document.getElementById('result').innerHTML = 'Invalid Input';
}
}
