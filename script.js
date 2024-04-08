function show(elem){
  for(var i = 0; i < x.length i++){
    x[i].style.display = "none";
  }
  elem.style.display = "block";
}
document.addEventListener('DOMContentLoaded', function() {
  var x = document.querySelectorAll("section");
  show(document.getElementById("events"));
});
