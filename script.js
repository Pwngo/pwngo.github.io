document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(function(link) {
   link.addEventListener('click', function(event) {
      event.preventDefault();
     window.location.reload();
      var targetId = this.getAttribute('href').slice(1);
      var targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
