window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menubar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("black")
  } else {
    navbar.classList.remove("black");
  }
}
