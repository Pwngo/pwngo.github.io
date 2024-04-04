var x;
function show(elem){
  for(var i = 0; i < x.length i++){
    x[i].style.display = "none";
  }
  elem.style.display = "block";
}
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav ul li a');
x = document.querySelectorAll("section");
  navLinks.forEach(function(link) {
   link.addEventListener('click', function(event) {
      event.preventDefault();
     window.location.reload();
      var targetId = this.getAttribute('href').slice(1);
      var targetSection = document.getElementById(targetId);
      show(targetSection);
    });
  });
  show(document.getElementById("events"));
});
