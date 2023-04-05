var price = 0;
var money;
var weeks = true;


//PLANETS
function mars(){
    document.getElementById('mars').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('asteroid').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Rover Racing";
    document.getElementById('ActivityTwo').innerHTML = "Hike up Mount Olympus";
    document.getElementById('ActivityThree').innerHTML = "Trip to Phobos and Deimos";

    document.getElementById('Description').innerHTML = "Our sister planet mars has always held humanity's eyes as our future home. While permanent residence has been achieved before, only with SpaceOne can you live on another planet in luxury. ";
    Calculate()
}

function asteroid(){
    document.getElementById('asteroid').className = "fadeIn";
    document.getElementById('button1').style = "";
    document.getElementById('mars').className = "fadeOut";
    document.getElementById('button2').style = "background-color: lightgray; color: black;";
    

    document.getElementById('ActivityOne').innerHTML = "";
    document.getElementById('ActivityTwo').innerHTML = "";
    document.getElementById('ActivityThree').innerHTML = "Buy a Small Asteroid to Mine";

    document.getElementById('Description').innerHTML = "Since the dawn of man, the moon has been the one constant in the night sky, always showing its bright face, just out of reach. Then, a century ago, humanity conquered the journey to the moon, reaching it in 3 days. Now, with Space One, you can not only reach the moon in less than a day, you can do it in a luxury vehicle makes the Titanic look like a crude art project.";
    Calculate()
}

//EXCURSIONS
function SpaceWalk(){
    document.getElementById('Description').innerHTML = "As you soar past the stars and planets, you'll experience the thrill of space travel and the excitement of what lies ahead. Once you arrive at your destination, you'll step out of the spacecraft and into the vast expanse of space. You'll be suited up in a specialized space suit that will protect you from the harsh environment and provide you with the necessary oxygen to breathe. As you take your first steps into the void, you'll feel the weightlessness of space and the incredible sensation of floating above the Earth.";
    Calculate();
}


function ZeroG(){
    document.getElementById('Description').innerHTML = "Welcome to an epic commercial space ship excursion inspired by the famous novel, Ender's Game. Your mission begins as you board a cutting-edge spacecraft designed for battle in the zero-gravity of space. You'll train with the most advanced space combat technology, honing your skills in preparation for the ultimate space battle. As you approach your friends in the opposing minispacecraft, you'll feel the excitement building. The sound of lasers firing and missiles launching fills the air as you engage in a thrilling space battle against those you know best. Your tactical skills will be put to the test as you try to outmaneuver and outsmart your friends in an intense fight for victory.";
    Calculate();
}


function MiniShips(){
    document.getElementById('Description').innerHTML = "Is sitting on a luxury-cruise spaceship too boring for you? Drive your own miniSpaceship powered by our Psi Rocket, giving you speed and thrill like you have never known before. Race against your friends in pre set races, or go on guided tours of the areas surrounding our spaceship, get unlimited freedom with our MiniShip Excursion.";    ;
    Calculate();
}

//Weeks
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


//CALCULATION
function Calculate(){
    price = 0;
    document.getElementById('Price').innerHTML = 'ezpz';
    if (document.getElementById('MOON').className == 'fadeIn') {price += 64000;}
    if (document.getElementById('earth').className == 'fadeIn') {price += 32000;}
    if (weeks== true) {price*= 1;}
    if (weeks== false) {price *= 1.8;}
    if (document.getElementById('checkbox1').checked) {price += 500000;}
    if (document.getElementById('checkbox2').checked) {price += 160000;}
    if (document.getElementById('checkbox3').checked) {price += 980000;}
    price = formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    document.getElementById('Price').innerHTML = price;
}
Calculate();