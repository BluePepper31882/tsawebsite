var price = 0;

var money;
var weeks = true;

function moon(){
    document.getElementById('MOON').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('earth').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Third Moon Activity";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}
      
function mars(){
    document.getElementById('mars').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('asteroid').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Third Moon Activity";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}

function asteroid(){
    document.getElementById('asteroid').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('mars').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Third Moon Activity";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}
function venus(){

    document.getElementById('earth').className = "fadeIn";
    document.getElementById('button2').style = "background-color: lightgray; color: black;";
    document.getElementById('MOON').className = "fadeOut";
    document.getElementById('button1').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Space Walk";
    document.getElementById('ActivityTwo').innerHTML = "Zero-G Sports";
    document.getElementById('ActivityThree').innerHTML = "Control MiniShips";

    document.getElementById('Description').innerHTML = "Going into space never meant that you had to be far from home, at a measly 300 miles from the earth, our Low-Earth-Orbit Trip brings the joys of space to you. Gaze out onto the planet that you grew up on, see the world from a new persepective, and tell all your friends that you are an astronaught with Space One."
    Calculate()
}

function saturn(){
    document.getElementById('saturn').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('jupiter').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Third Moon Activity";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}

function jupiter(){
    document.getElementById('jupiter').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('saturn').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Third Moon Activity";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}

function saturn(){
    
    document.getElementById('saturn').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('jupiter').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Third Moon Activity";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}

function ZeroG(){
    document.getElementById('Description').innerHTML = "Welcome to an epic commercial space ship excursion inspired by the famous novel, Ender's Game. Your mission begins as you board a cutting-edge spacecraft designed for battle in the zero-gravity of space. You'll train with the most advanced space combat technology, honing your skills in preparation for the ultimate space battle. As you approach your friends in the opposing minispacecraft, you'll feel the excitement building. The sound of lasers firing and missiles launching fills the air as you engage in a thrilling space battle against those you know best. Your tactical skills will be put to the test as you try to outmaneuver and outsmart your friends in an intense fight for victory.";
    Calculate();
}

// "Is sitting on a luxury-cruise spaceship too boring for you? Drive your own miniSpaceship powered by our Psi Rocket, giving you speed and thrill like you have never known before. Race against your friends in pre set races, or go on guided tours of the areas surrounding our spaceship, get unlimited freedom with our MiniShip Excursion.";

function MiniShips(){
    document.getElementById('Description').innerHTML = "Is sitting on a luxury-cruise spaceship too boring for you? Drive your own miniSpaceship powered by our Psi Rocket, giving you speed and thrill like you have never known before. Race against your friends in pre set races, or go on guided tours of the areas surrounding our spaceship, get unlimited freedom with our MiniShip Excursion.";    ;
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
    if (document.getElementById('MOON').className == 'fadeIn') {price += 64000;}
    if (document.getElementById('earth').className == 'fadeIn') {price += 32000;}
    if (weeks== true) {price += 500;}
    if (weeks== false) {price *= 1.5;}
    if (document.getElementById('checkbox1').checked) {price += 5000;}
    if (document.getElementById('checkbox2').checked) {price += 1600;}
    if (document.getElementById('checkbox3').checked) {price += 2700;}
    console.log(price)
    price = formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    document.getElementById('Price').innerHTML = price;
}
Calculate();