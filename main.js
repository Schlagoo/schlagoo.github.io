Vue.component('navbar-normal', {
  template: '<header id="navbar"><div class="navbar"><a href="index.html"><img src="./imgs/icons/logo_small.svg" alt="Logo"></a><div class="links flex row" id="menu-big"><a href="index.html#projects"><p class="text" id="link">Projects</p></a><a href="#contact"><p class="text" id="link">Contact</p></a><a href="about.html"><p class="text" id="link">About</p></a><a href="https://drive.google.com/file/d/1k038_JvLfKjEPRi_qXj6cgx4dbcZyAHl/view?usp=sharing" class="button" id="resume"><p class="text" style="padding: 10px 24px; margin: 0">Resume</p></a></div></div><div class="fine-line" style="margin: 0;"></div></header>'
})

Vue.component('navbar-small', {
  template: '<div class="navbar-opened" id="menu" style="display: none;"><div class="blurred"></div><div class="menu"><div class="menu-text align-center"><a href="./index.html"><p class="text" onclick="handle_menu()" id="home">Home</p></a><a href="./index.html#projects"><p class="text" onclick="handle_menu()" id="proj">Projects</p></a><a href="./about.html"><p class="text" onclick="handle_menu()" id="abo">About</p></a><a href="https://drive.google.com/file/d/1k038_JvLfKjEPRi_qXj6cgx4dbcZyAHl/view?usp=sharing" class="button" id="resume"><p class="text" style="padding: 16px 24px; margin: 0;">Resume</p></a></div><div id="menu-contact"><div class="fine-line"></div><div class="flex-row flex-center align-center"><a href="https://github.com/Schlagoo"><img src="./imgs/icons/contact/github_light.png" alt="Github" id="icon-contact" style="padding: 1em 8px 1em 0;"></a><a href="https://www.linkedin.com/in/pascal-schlaak-845540174"><img src="./imgs/icons/contact/linkedin_light.png" alt="LinkedIn" id="icon-contact"></a><a href="mailto:schlaak.pascal@gmail.com"><img src="./imgs/icons/contact/email_light.png" alt="E-Mail" id="icon-contact"></a><a href="https://www.instagram.com/schlagoo/"><img src="./imgs/icons/contact/instagram_light.png" alt="Instagram" id="icon-contact"></a><a href="https://www.facebook.com/pascal.schlaak.65"><img src="./imgs/icons/contact/facebook_light.png" alt="Facebook" id="icon-contact" style="padding: 1em 0 1em 8px;"></a></div></div></div></div>'
})

Vue.component('hamburger', {
  template: '<div id="hamburger" onclick="handle_menu()"><span></span><span></span><span></span></div>'
})

Vue.component('footer-portfolio', {
  template: '<footer><div class="fine-line" id="contact" style="margin: 2.5vh 0"></div><div class="flex row space-between"><div><p><a href="./imprint.html">Imprint</a> | <a href="./privacy_policy.html">Privacy policy</a></p></div><div class="flex" id="contact"><a href="https://github.com/Schlagoo"><img src="./imgs/icons/contact/github_dark.png" alt="Github" id="icon-contact" style="padding: 1em 8px 1em 0;"></a><a href="https://www.linkedin.com/in/pascal-schlaak-845540174"><img src="./imgs/icons/contact/linkedin_dark.png" alt="LinkedIn" id="icon-contact"></a><a href="mailto:schlaak.pascal@gmail.com"><img src="./imgs/icons/contact/email_dark.png" alt="E-Mail" id="icon-contact"></a><a href="https://www.instagram.com/schlagoo/"><img src="./imgs/icons/contact/instagram_dark.png" alt="Instagram" id="icon-contact"></a><a href="https://www.facebook.com/pascal.schlaak.65"><img src="./imgs/icons/contact/facebook_dark.png" alt="Facebook" id="icon-contact" style="padding: 1em 0 1em 8px;"></a></div></div></footer>'
})

var app = new Vue({
    el: '#app'
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("hamburger").style.top = "20px";
  } else if (prevScrollpos < currentScrollPos) {
    document.getElementById("navbar").style.top = "-70px";
    document.getElementById("hamburger").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

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

AOS.init();

function show_description(idx) {
    
  /**
  * Function to show description of clicked job
  * idx = name of clicked element
  */

  var elements = ["in-outdoorshop", "master", "bachelor", "bmw", "daimler", "mapal", "cadflex", "abitur", "forum"];

  // Set color to standard and remove all description-elements
  for (var i = 0; i < elements.length; i++) {
    document.getElementById(elements[i]).style.color = "#5f6368";
    document.getElementById('description-' + elements[i]).style.display = "none";
  }

  // Highlight element in work-history and display description
  document.getElementById(idx).style.color = "#2F58F7";
  document.getElementById('description-' + idx).style.display = "block";
  
}