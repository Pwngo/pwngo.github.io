var currenturl = location.href.replace(location.origin + "/", "");
if(currenturl == ""){
  currenturl = "index.html";
}
alert(currenturl);
var links = document.querySelectorAll("a");
for(var i = 0, i < links.length; i++){
if(links[i].href == currenturl){
links[i].style.fontWeight = "bold";
}
}
