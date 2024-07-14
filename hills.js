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