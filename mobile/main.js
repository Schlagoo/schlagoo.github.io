/**
 * Function to open navbar
 */
function open_nav(x) {
    x.classList.toggle("change");
    
    var y = document.getElementById("my_nav_links");
    if (y.style.display === "flex") {
      y.style.display = "none";
    } else {
      y.style.display = "flex";
    }
}