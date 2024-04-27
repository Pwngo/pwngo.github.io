function changeFavicon(url){
  var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'https://stackoverflow.com/favicon.ico';
}
changeFavicon("/SDG_logo.png")
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
