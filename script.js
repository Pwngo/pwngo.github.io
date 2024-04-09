function show(x, elem){
  for(var i = 0; i < x.length i++){
    x[i].style.display = "none";
  }
  elem.style.display = "block";
}
show(document.querySelectorAll("section"), document.getElementById("events"));
