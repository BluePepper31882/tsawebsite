




image1 = document.getElementById('image1');
image2 = document.getElementById('image2');
image3 = document.getElementById('image3');
image4 = document.getElementById('image4');

const images = [image1,image2,image3, image4];
document.getElementById('image1').style.opacity = 1;
document.getElementById('image2').style.opacity = 0;
document.getElementById('image3').style.opacity = 0;
document.getElementById('image4').style.opacity = 0;

x = 0;

// function wait5() {
//     setTimeout(console.log('waiting'), 5000);
// }

function fortnite() {
        setTimeout(function() {document.getElementById('image1').style.opacity = 0;
document.getElementById('image2').style.opacity = 0;
document.getElementById('image3').style.opacity = 0;
document.getElementById('image4').style.opacity = 0;
        x+=1; if(x>3) {x=0} images[x].style.opacity = 1;
            fortnite()
        }, 3000)
    }
    

fortnite();