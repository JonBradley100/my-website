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