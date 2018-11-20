var slideIndex = 1;
showSlides(1);

// Next/previous contrls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function frame1() {
	document.getElementById("currentPage").src = "drinks.html";
}

function frame2() {
	document.getElementById("currentPage").src = "appetizers.html";
}

function frame3() {
	document.getElementById("currentPage").src = "pizzas.html";
}

function frame4() {
	document.getElementById("currentPage").src = "pastas.html";
}

function frame5() {
	document.getElementById("currentPage").src = "burgersandsandwiches.html";
}

function frame6() {
	document.getElementById("currentPage").src = "mains.html";
}

function frame7() {
	document.getElementById("currentPage").src = "sides.html";
}

function frame8() {
	document.getElementById("currentPage").src = "desserts.html";
}
