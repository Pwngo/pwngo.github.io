function changeFavicon(url){
  var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = url;
}
changeFavicon("/favicon.png");
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

let eventElements = document.querySelectorAll('.event, .workshop');

// Add a click event listener to each element
eventElements.forEach(function(element) {
  element.addEventListener('click', function() {
    // Toggle the 'active' class on click
    this.classList.toggle('active');
  });
});

// Select all elements with class 'testimonial'
let testimonialElements = document.querySelectorAll('.testimonial');

// Add a mouseover event listener to each element
testimonialElements.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    // Add the 'highlight' class on mouseover
    this.classList.add('highlight');
  });

  element.addEventListener('mouseout', function() {
    // Remove the 'highlight' class on mouseout
    this.classList.remove('highlight');
  });
});
