"use strict"
function randomyo() {
    
    var posx = Math.floor(Math.random() * 10);
    var posy = Math.floor(Math.random() * 10);
    
    var x = (posx * 50 * 2).toString() + "px";
    var y = (posy * 50).toString() + "px";
    
    document.getElementById("red").style.bottom = y;
    document.getElementById("red").style.right = x;
}


function startyo() {
    setInterval(randomyo, 2000);
}

var redyo = document.getElementById("red");
var styleobj2 = window.getComputedStyle(redyo);

var blackyo = document.getElementById("black");
var styleobj = window.getComputedStyle(blackyo);


function moveyo(e) {
    switch (e.key) {
        case "a":
            var leftyo = styleobj.getPropertyValue('left');
            if(parseInt(leftyo) >= 50) {
                var valueyo = parseInt(leftyo) - 50;
                blackyo.style.left = valueyo.toString() + "px";
                break;
            }
            else{
                break;
            }
        
        case "d":
            var leftyo = styleobj.getPropertyValue('left');
            if(parseInt(leftyo) <= 900) {
                var valueyo = parseInt(leftyo) + 50;
                blackyo.style.left = valueyo.toString() + "px";
                break;
            }
            else{
                break;
            }

         case "w":
            var topyo = styleobj.getPropertyValue('top');
            if(parseInt(topyo) >= 50) {
                var valueyo = parseInt(topyo) - 50;
                blackyo.style.top = valueyo.toString() + "px";
                break;
            }
            else{
                break;
            }

        case "s":
            var topyo = styleobj.getPropertyValue('top');
            if(parseInt(topyo) <= 400) {
                var valueyo = parseInt(topyo) + 50;
                blackyo.style.top = valueyo.toString() + "px";
                break;
            }
            else{
                break;
            }
    }
    wincheckeryo();
}

window.addEventListener("keyup", moveyo);

function wincheckeryo() {
    var redleft = 950 - parseInt(styleobj2.getPropertyValue('right'));
    var blackleft = parseInt(styleobj.getPropertyValue('left'));

    var redtop = 450 - parseInt(styleobj2.getPropertyValue('bottom'));
    var blacktop = parseInt(styleobj.getPropertyValue('top'));

    if (redleft == blackleft && redtop == blacktop) {
        alert("You Win");
    }
}