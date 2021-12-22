function easeInOutQuart(x) {
  return x * x * x * x * x;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
  return [curtop];
  }
}

async function Tutor() {
  var elem = document.getElementById("myAnimation");

  for (let i = 300; i >= 0; --i) {

    

    await sleep(1);

    elem.style.backgroundColor = "rgba(100, 100, 100," +  easeInOutQuart(i/300)  + ')';

    if (easeInOutQuart(i/300) <= 0.7){
      elem.style.zIndex = "0";
    }
    
    
  }
  
}
Tutor()

document.getElementById("btn-1").addEventListener("mousedown", function(event) {
  window.scroll(0,1000);
})

document.getElementById("btn-2").addEventListener("mousedown", function(event) {
  window.scroll(0,2000);
})

let Socials = document.getElementById("Socials");
let SocialText = document.getElementById("SocialText");
var containerDiv = document.getElementById("Socials");
var innerDivs = containerDiv.getElementsByClassName("Logo");

for (var i = 0; i < innerDivs.length; i++) {
  innerDivs[i].addEventListener("mouseover", function (event) {
    let margin_left = window.getComputedStyle(document.getElementById(event.target.id)).getPropertyValue("margin-left").match(/[+-]?\d+(?:\.\d+)?/g).map(Number);

    let final = ((Number(margin_left)) - 50).toString() + "px";

    console.log(final, event.target.id);
    SocialText.innerText = event.target.alt;
    SocialText.style.marginTop = "80px";
    SocialText.style.marginLeft = final;
    SocialText.style.fontSize = "30px";
    SocialText.style.color = "rgba(0, 0, 0, 1)";


    SocialText.style.transitionDuration = "0.5s, 0.3s, 0.5s, 0.5s";
    SocialText.style.transitionProperty = "font-size, color, margin-top, margin-left";
    SocialText.style.transitionTimingFunction = "cubic-bezier(0.22, 1, 0.36, 1)";

  });

  innerDivs[i].addEventListener("mouseout", function (event) {
    let margin_left = window.getComputedStyle(SocialText).getPropertyValue("margin-left").match(/[+-]?\d+(?:\.\d+)?/g).map(Number);

    let final = ((Number(margin_left) + 25)).toString() + "px";

    SocialText.style.marginTop = "50px";
    SocialText.style.marginLeft = final;
    SocialText.style.fontSize = "20px";
    SocialText.style.color = "rgba(0, 0, 0, 0)";

    SocialText.style.transitionDuration = "0.5s, 0.3s, 0.5s, 0.5s";
    SocialText.style.transitionProperty = "font-size, color, margin-top, margin-left";
    SocialText.style.transitionTimingFunction = "cubic-bezier(0.36, 1, 0.22, 1)";
  });
};