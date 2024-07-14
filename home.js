const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu()   {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu()    {
    hamburger.classList.remove("active");
    navMenu.classList.toggle("active");
}




let downDiv = document.getElementById("DownSouth-div");
let downText = document.getElementById("DownSouth-text");

downDiv.addEventListener('mouseenter', () => downText.classList.add("hover-country-text"));
downDiv.addEventListener('mouseleave', () => downText.classList.remove("hover-country-text"));

let ccDiv = document.getElementById("cc-div");
let ccText = document.getElementById("cc-text");

ccDiv.addEventListener('mouseenter', () => ccText.classList.add("hover-country-text"));
ccDiv.addEventListener('mouseleave', () => ccText.classList.remove("hover-country-text"));

let upDiv = document.getElementById("up-div");
let upText = document.getElementById("up-text");

upDiv.addEventListener('mouseenter', () => upText.classList.add("hover-country-text"));
upDiv.addEventListener('mouseleave', () => upText.classList.remove("hover-country-text"));


let eastDiv = document.getElementById("east-div");
let eastText = document.getElementById("east-text");

eastDiv.addEventListener('mouseenter', () => eastText.classList.add("hover-country-text"));
eastDiv.addEventListener('mouseleave', () => eastText.classList.remove("hover-country-text"));


let ntDiv = document.getElementById("nt-div");
let ntText = document.getElementById("nt-text");

ntDiv.addEventListener('mouseenter', () => ntText.classList.add("hover-country-text"));
ntDiv.addEventListener('mouseleave', () => ntText.classList.remove("hover-country-text"));



let hisDiv = document.getElementById("his-div");
let hisText = document.getElementById("his-text");

hisDiv.addEventListener('mouseenter', () => hisText.classList.add("hover-country-text"));
hisDiv.addEventListener('mouseleave', () => hisText.classList.remove("hover-country-text"));


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//Slide Image
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 5000); 
  }

  function currentSlide(n) {
      slideIndex = n;
      showSlides();
  }  