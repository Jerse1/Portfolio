function easeInOutQuart(x) {
  return x * x * x * x * x;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const main_nav = document.getElementById('aboutme');
const Discord_Tag = "Jerse1#5645";

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
    elem.style.backgroundColor = "rgba(255, 255, 255," +  easeInOutQuart(i/300)  + ')';

    if (easeInOutQuart(i/300) <= 0.1){
      elem.style.zIndex = "0";
    }
    
    
  }
  
}
Tutor();

let links = document.querySelectorAll('a');
if (links){
  links.forEach((link) =>{
    link.onclick = (e) => {
      let body = document.querySelector('body')
      e.preventDefault();

      setTimeout(function(){
        if (body.classList.contains('fade-out')) {
          console.log('navig');
          if (!e.srcElement.parentElement.href){
            window.location =  e.srcElement.href;

          }else{
            window.location =  e.srcElement.parentElement.href;
          }
        }
      }, 500);
      body.classList.add('fade-out');
    }
  })
}

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

document.getElementById("disc").onmouseup = function(){
  navigator.clipboard.writeText(Discord_Tag);
  warn("Copied discord tag: " + Discord_Tag);
};

window.addEventListener("scroll", () => {
  var y = window.scrollY;
  if (y >= 300){
      main_nav.style.opacity = "0";
      return;
  }
  else{
      main_nav.style.opacity = "1";
  }
});

for (var i = 0; i < innerDivs.length; i++) {
  innerDivs[i].addEventListener("mouseover", function (event) {
    let margin_left = window.getComputedStyle(document.getElementById(event.target.id)).getPropertyValue("margin-left").match(/[+-]?\d+(?:\.\d+)?/g).map(Number);

    let final = ((Number(margin_left)) - 50).toString() + "px";

    console.log(final, event.target.id);
    SocialText.innerText = event.target.alt;
    SocialText.style.marginTop = "80px";
    SocialText.style.marginLeft = final;
    SocialText.style.fontSize = "30px";
    SocialText.style.color = "rgba(255, 255, 255, 1)";


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
    SocialText.style.color = "rgba(255, 255, 255, 0)";

    SocialText.style.transitionDuration = "0.5s, 0.3s, 0.5s, 0.5s";
    SocialText.style.transitionProperty = "font-size, color, margin-top, margin-left";
    SocialText.style.transitionTimingFunction = "cubic-bezier(0.36, 1, 0.22, 1)";
  });
};



