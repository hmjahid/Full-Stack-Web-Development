function age(){
    let d = document.getElementById('date').value;
    let m = document.getElementById('month').value;
    let y = document.getElementById('year').value;
    
    let date = new Date();
    let d1 = date.getDate();
    let m1 = 1 + date.getMonth();
    let y1 = date.getFullYear();

    var month = [30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d > d1){
        d1 = d1 + month [m1 -1];
        m = m1 - 1;
    }

    if (m > m1){
        m1 = m1 + 12 ;
        y1 = y1 - 1;
    }

    let a = d1 - d;
    let b = m1 - m;
    let c = y1 - y;

    document.getElementById('age').innerHTML = 'Your age is ' +c+ ' Years ' +b+ ' Months ' +a+ ' Days';

}