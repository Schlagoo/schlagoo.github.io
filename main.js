// Functionality to handle navbar

function handle_menu() {
  /**
   * Function to handle navbar overlay menu
   */

  var menu = document.getElementById("menu");

    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
}