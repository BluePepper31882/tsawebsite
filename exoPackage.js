var price = 0;

var money;
var weeks = true;

function moon(){
    document.getElementById('MOON').className = "fadeIn";
    document.getElementById('button1').style = "background-color: lightgray; color: black;";
    document.getElementById('earth').className = "fadeOut";
    document.getElementById('button2').style = "";
    

    document.getElementById('ActivityOne').innerHTML = "Attend a Lecture About Lunar Rocks from Dr. Landon Boa";
    document.getElementById('ActivityTwo').innerHTML = "Claim your own 1mx1m section of the moon and gain the title of Space Lord";
    document.getElementById('ActivityThree').innerHTML = "Go caving in the lunar caves";

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
      
function FirstActivity(){

    if(document.getElementById('MOON').className == "fadeIn"){
        document.getElementById('Description').innerHTML = "Our founder, Dr Landon Boa will give a lecture about the different types of Moon rocks that can be found on the lunar surface. These rocks, if found during Caving excursion, can be brought home on the spaceship for the small price of $300*. "
    }
    else{
        document.getElementById('Description').innerHTML = "As you soar past the stars and planets, you'll experience the thrill of space travel and the excitement of what lies ahead. Once you arrive at your destination, you'll step out of the spacecraft and into the vast expanse of space. You'll be suited up in a specialized space suit that will protect you from the harsh environment and provide you with the necessary oxygen to breathe. As you take your first steps into the void, you'll feel the weightlessness of space and the incredible sensation of floating above the Earth.";
    }
    
    Calculate();
}


function SecondActivity(){
    if(document.getElementById('MOON').className == "fadeIn"){
        document.getElementById('Description').innerHTML = "A piece of the moon can be yours! With a small investment, a square meter of land could be owned by you. Not only will you only own a chunk of land on the moon, but you will also be awarded the title Space Lord by the UP (United Planets)";
    }
    else{
        document.getElementById('Description').innerHTML = "Experience the magic of Zero-G in our special Zero-G sports arena. Just because there isn't gravity doesn't mean that there can't be fun, enjoy games such as Zero-G Sumo Wrestling, Zero-G Soccer, and a Battle Game based on the Orson Scott Card book Ender's Game."
    }
    Calculate();
}


function ThirdActivity(){
    if(document.getElementById('MOON').className == "fadeIn"){
        document.getElementById('Description').innerHTML = "For our more adventurous tourists, try exploring the caves on the lunar surface. Explore the deep dark secrets that our moon has to offer, and be among the few to go below the surface of the moon. Any rocks you collect (within reason) can be brought to our founder Dr. Boa, who can tell you all about how that rock was formed and its chemical properties.";
    }
    else{
        document.getElementById('Description').innerHTML = "Is sitting on a luxury-cruise spaceship too boring for you? Drive your own miniSpaceship powered by our Psi Rocket, giving you speed and thrill like you have never known before. Race against your friends in pre set races, or go on guided tours of the areas surrounding our spaceship, get unlimited freedom with our MiniShip Excursion.";
    }
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
    if (document.getElementById('MOON').className == 'fadeIn') {price += 64000;}
    if (document.getElementById('earth').className == 'fadeIn') {price += 32000;}
    if (weeks== true) {price*= 1;}
    if (weeks== false) {price *= 1.8;}
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