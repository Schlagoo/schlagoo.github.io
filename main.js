/**
 * Function to open navbar
 */
function open_nav(x) {

  x.classList.toggle("change");
    
  var y = document.getElementById("mobile-links");

  if (y.style.display === "flex") {
    y.style.display = "none";
  } else {
    y.style.display = "flex";
  }
}

function close_nav() {

  var h = document.getElementById("hamburger");
  h.classList.remove("change");
  
  var y = document.getElementById("mobile-links");
  if (y.style.display === "flex") {
    y.style.display = "none";
  } else {
    y.style.display = "flex";
  }
}