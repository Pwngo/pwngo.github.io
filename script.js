var currenturl = location.href.replace(location.origin + "/", "");
if(currenturl == ""){
  currenturl = "index.html";
}
var links = document.querySelectorAll("a");
for(var i = 0; i < links.length; i++){
if(links[i].href == currenturl){
alert(links[i]);
links[i].style.fontWeight = "bold";
}
}
