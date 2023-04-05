var price = 0;

var money;
var weeks = true;

function saturn(){
    document.getElementById('saturn').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('jupiter').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Ride Around Saturn Rings";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}
      
function jupiter(){
    document.getElementById('jupiter').className = "fadeIn";
    document.getElementById('button1').style = "";
    document.getElementById('saturn').className = "fadeOut";
    document.getElementById('button2').style = "background-color: lightgray; color: black;";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Third Moon Activity";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}


function ZeroG(){
    document.getElementById('Description').innerHTML = "";
    Calculate();
}

function ExploreMoons(){
    document.getElementById('Description').innerHTML = "";
    Calculate();
}


function MiniShips(){
    document.getElementById('Description').innerHTML = "";
    Calculate();
}

function week1(){
    document.getElementById('week1').style = "background-color: lightgray; color: black;";
    document.getElementById('week2').style = "";
    weeks = true;
    Calculate() 
    
}

function week2(){
    document.getElementById('week2').style = "background-color: lightgray; color: black;";
    document.getElementById('week1').style = "";
    weeks = false;
    Calculate()
}



function Calculate(){
    price = 0;
    document.getElementById('Price').innerHTML = 'ezpz';
    if (document.getElementById('saturn').className == 'fadeIn') {price += 540000;}
    if (document.getElementById('jupiter').className == 'fadeIn') {price += 450000;}
    if (weeks== true) {price*= 10;}
    if (weeks== false) {price *= 18;}
    if (document.getElementById('checkbox1').checked) {price += 75000;}
    if (document.getElementById('checkbox2').checked) {price += 100000;}
    if (document.getElementById('checkbox3').checked) {price += 200000;}
    console.log(price)
    price = formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    document.getElementById('Price').innerHTML = price;
}
Calculate();