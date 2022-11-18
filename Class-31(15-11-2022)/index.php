<?php

//for loop

$students=[
    ['Alamin', 15, 35],
    ['Osman', 15, 35],
    ['Shariful', 15, 35],
    ['Iqbal', 15, 35],
    ['Sobuj', 15, 35],
];

for($row=0; $row <4; $row++){
    echo "<h1>Students index number $row</h1>";


echo "<ul>";

for($col=0; $col <3; $col++){
    echo "<li>".$students[$row][$col]."</li>";
}

echo "</ul>";
}


//do while loop
$x = 5;

do{
    echo "The number is: $x <br>";
$x++;
}
while ($x <= 20)

?>