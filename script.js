function show(x, elem){
  try{
  for(var i = 0; i < x.length i++){
    x[i].style.display = "none";
  }
  elem.style.display = "block";
  } catch(e){
    alert(e.message);
  }
}
try{
show(document.querySelectorAll("section"), document.getElementById("events"));
} catch(e){
  alert(e.message);
}
