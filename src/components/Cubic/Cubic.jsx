import React from 'react';

import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";
import five from "./5.jpg";
import six from "./6.jpg";
import "./rubikKeyBindingBonus.css"

const Cubic = () => {
    // logic  rotation rubic
    let rotateX = 0, rotateY = 0;
    let cursorPosX = 0, cursorPosY = 0;

    window.addEventListener('mousemove', function(e) {	
        if (cursorPosX < (e.pageX-2)) { rotateY += 2 } 
            else if (cursorPosX > (e.pageX+2)) { rotateY -= 2 };
        if (cursorPosY < (e.pageY-2)) { rotateX += 2 } 
            else if (cursorPosY > (e.pageY+2)){ rotateX -= 2 };			
        cursorPosX = e.pageX; 
        cursorPosY = e.pageY; 

        document.querySelector('.rubiksCube').style.transform = 
            'rotateX(' + rotateX + 'deg)'+'rotateY(' + rotateY + 'deg)';
    }, false);


    //positioning
    let green  = document.querySelector(".face1green");
    let blue   = document.querySelector(".face2blue");
    let yellow = document.querySelector(".face3yellow");
    let red    = document.querySelector(".face4red");
    let white  = document.querySelector(".face5white");
    let orange = document.querySelector(".face6orange");
    let zG = 200, zB = -200, zY = 200, zR = 200, zW = 200, zO = 200;
    let dY = 0, dR = 0, dW = 0, dO = 0;

    document.onkeydown = function(e) {
        //motion control in English keyboard layout mode:
        if     (e.key === "w") zG-=10 
        else if(e.key === "s") zG+=10 

        else if(e.key === "e") zB-=10 
        else if(e.key === "d") zB+=10 

        else if(e.key === "r") zY-=10 
        else if(e.key === "f") zY+=10 

        else if(e.key === "t") zR-=10 
        else if(e.key === "g") zR+=10 

        else if(e.key === "y") zW-=10 
        else if(e.key === "h") zW+=10

        else if(e.key === "u") zO-=10 
        else if(e.key === "j") zO+=10

        //rotation:
        else if(e.key === "4") dY+=5
        else if(e.key === "v") dY-=5

        else if(e.key === "5") dR+=5
        else if(e.key === "b") dR-=5

        else if(e.key === "6") dW+=5
        else if(e.key === "n") dW-=5

        else if(e.key === "7") dO+=5
        else if(e.key === "m") dO-=5

        green.style.cssText  += 'transform: translate3d(0,0,'+zG+'px)';
        blue.style.cssText   += 'transform: translate3d(0,0,'+zB+'px)';
        yellow.style.cssText += 'transform: translate3d(0,0,'+zY+'px)  rotate3d(0,1,0,'+dY+'deg)';
        red.style.cssText    += 'transform: translate3d(0,0,'+zR+'px)  rotate3d(1,0,0,'+dR+'deg)';
        white.style.cssText  += 'transform: translate3d(0,0,'+zW+'px)  rotate3d(0,1,0,'+dW+'deg)';
        orange.style.cssText += 'transform: translate3d(0,0,'+zO+'px)  rotate3d(1,0,0,'+dO+'deg)';

}



  return (
    <div class="rubiksCube">
        <div class="face1green">   <img src={one}/>   </div>
        <div class="face2blue">    <img src={two}/>   </div>
        <div class="face3yellow">  <img src={three}/>   </div>
        <div class="face4red">     <img src={four}/>   </div>
        <div class="face5white">   <img src={five}/>   </div>
        <div class="face6orange">  <img src={six}/>   </div>
    </div>
  )
}

export default Cubic