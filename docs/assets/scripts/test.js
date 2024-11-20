
document.addEventListener("DOMContentLoaded", function() {
  const pages = document.querySelectorAll(".page");
  const translateAmount = 100;
  let translate = 0;

  slide = (direction) => {

    if (direction === "next") {
      translate = 0;
      translate -= translateAmount;
      console.log("page 1 droit"+translate);
    } else {
      translate = -100;
      translate += translateAmount;
      console.log(translate);
    }
    pages.forEach((page) => (page.style.transform = `translateX(${translate}%)`));
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const pages = document.querySelectorAll(".page");
  const translateAmount = 100;
  let translate = 0;

  slide1 = (direction) => {
    if (direction === "next1") {
      translate = 0;
      translate -= translateAmount;
      console.log(translate);
    } else {
      translate = -100;
      translate += translateAmount;
      console.log(translate);
    }
    pages.forEach((page) => (page.style.transform = `translateY(${translate}%)`));
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const pages = document.querySelectorAll(".page");
  const translateAmount = 100;
  let translateX = 0;
  let translateY = -100;

  slide2 = (direction) => {
    if (direction === "next2") {
      translateX = 0;
      translateX -= translateAmount;
      console.log(translateX);
    } else {
      translateX = -100;
      translateX += translateAmount;
    }

    pages.forEach((page) => {
      page.style.transform = `translate(${translateX}%, ${translateY}%)`;
    });
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const pages = document.querySelectorAll(".page");
  const translateAmount = 100;
  let translateX = 0;
  let translateY = 0;

  slide3 = (direction) => {
    if (direction === "next3") {
      translateX = 0;
      translateX -= translateAmount;
      console.log(translateX);
    } else {
      translateX = -100;
      translateX += translateAmount;
    }

    pages.forEach((page) => {
      page.style.transform = `translate(${translateX}%, ${translateY}%)`;
    });
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const pages = document.querySelectorAll(".page");
  const translateAmount = 100;
  let translateX = -100;
  let translateY = 0;


  slide4 = (direction) => {
    if (direction === "next") {
      translateY = 0;
      translateY -= translateAmount;
      console.log(translateY);
    } else {
      let translateX = -100;
      translateX += translateAmount;
    }

    pages.forEach((page) => {
      page.style.transform = `translate(${translateX}%, ${translateY}%)`;
    });
  };
});

//pour les effets des bouton menu
document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('input');
  let isActive = false;
  const autoShow = setInterval(() => {
    isActive = !isActive;
    checkboxes.forEach(checkbox => {
      checkbox.checked = isActive;
    });
  }, 1000);
});


// REDEMARAGE DES ANIMATONS VIA LES BOUTONS DE NAVIGATION

let interval;

function play() {
  let i = 0;


  // Supprimer la classe d'animation pour tous les éléments
  for (let j = 1; j <= 6; j++) {
    const item = document.querySelector(`.tool-item${j}`);
    const animate = `animate${j}`;
    item.classList.remove(animate);
  }

  clearInterval(interval);

  interval = setInterval(function() {
    const toolItem = document.querySelector(`.tool-item${i}`);
    const animateClass = `animate${i}`;

    // Ajouter la classe d'animation
    toolItem.classList.add(animateClass);

    i++;
    if (i > 6) {
      clearInterval(interval);
    }
  }, 500);
}

document.querySelector(".runButton").addEventListener("click", play);




// FONCTION POUR FAIRE TOMBER ORLEANS
function down() {
  //console.log("test de click 2");
  document.querySelector(".orleans3").className = "orleans3";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".orleans3").className = "orleans3 aniOrleans3";
    });
  });
}

document.querySelector(".runButton").addEventListener("click", down, false);









//TEST POUR ANNIMATION

const bouton = document.querySelector('.bouton');
const nom = document.querySelectorAll('.nom');
const logo = document.querySelectorAll('.icon');
const TL = gsap.timeline({ paused: true });

TL
  .from(".bienvenue", { opacity: 0, x: 1000, duration: 1, ease: "power2.out" })
  .from(".stem", { opacity:0,zInde:-1, ease: "power2.out" },)
  .from(".prenom", {  opacity: 0,x: 1000, duration: 2, ease: "power2.out" }, "-=1")
  .staggerFrom(nom, 1, { opacity: 0, ease: "power2.out" }, 0.3)
  .from(".suivez", { x: -1000, duration: 2, ease: "power2.out" },"-=2")
  .from(logo, 0.4, {  opacity: 0,transform: "scale(0)", ease: "power2.out" })
  .from(".cv", { y:100, duration: 1, opacity:0, ease:"electric"});

bouton.addEventListener('click', () => {
  console.log("test de click");
  TL.restart();
});


// ***********

const button = document.querySelector('#your-button-selector');

// Create a GSAP timeline
const timeline = gsap.timeline({ paused: true });

// Add your animation to the timeline
timeline
.from(".bienvenue", { opacity: 0, x: 1000, duration: 1, ease: "power2.out" })
.from(".stem", { opacity:0,zInde:-1, ease: "power2.out" },)
.from(".prenom", {  opacity: 0,x: 1000, duration: 2, ease: "power2.out" }, "-=1")
.staggerFrom(nom, 1, { opacity: 0, ease: "power2.out" }, 0.3)
.from(".suivez", { x: -1000, duration: 2, ease: "power2.out" },"-=2")
.from(logo, 0.4, {  opacity: 0,transform: "scale(0)", ease: "power2.out" })
.from(".cv", { y:100, duration: 1, opacity:0, ease:"electric"});

// Add an event listener to the button
button.addEventListener('click', function() {
  // Restart the timeline
  timeline.restart();
});

// ANIMATION DU CARROUSSEL
/*
var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
*/

