const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#navbar");

hamburgerToggle.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
}

/* This is the code for the slideshow */
let slideIndex = 0;
showSlide(slideIndex); // Show the first slide

function showSlide(index) {
    const slides = document.getElementsByClassName("slides");
    if (index >= slides.length) {
        slideIndex = 0; // Wrap around to first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Wrap around to last slide
    } else {
        slideIndex = index; // Set the current index
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

function changeSlide(n) {
    showSlide(slideIndex + n); // Change slide by n
}

/* This is the code for the calculation */
function calculateResult() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var result = parseFloat(input1) + parseFloat(input2);
  document.getElementById("result").textContent = "The result is: " + result;
}
