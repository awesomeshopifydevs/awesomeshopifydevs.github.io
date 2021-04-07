console.log("Thank for the business with us");
var loadJS = function (url, implementationCode, location) {
  //url is URL of external file, implementationCode is the code
  //to be called from the file, location is the location to
  //insert the <script> element

  var scriptTag = document.createElement("script");
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};

var celebrationStart = function () {
  console.log('jquery is loaded');
  // document.querySelector('body').remove();
};

loadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js", celebrationStart, document.body);
