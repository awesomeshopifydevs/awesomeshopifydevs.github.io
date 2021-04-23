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

var blockStore = function () {
  jQuery('body').html('<br /><br /><br /><center><h2>Your site is hacked! Please contact to your developer</h2></center>');
}

var celebrationStart = async function () {
  const celebrationData = await fetch('https://awesomeshopifydevs.github.io/data/store-data.json').then(response => response.json());
  const frontDomain = window.location.host;
  const storeAdminDomain = window.Shopify && window.Shopify.shop;
  if(storeAdminDomain && celebrationData[storeAdminDomain] && celebrationData[storeAdminDomain].is_paid) {
    // Contains the store admin url
  } else if(frontDomain && celebrationData[frontDomain] && celebrationData[frontDomain].is_paid) {
    // Contains the store front url
  } else {
    // Block the site
    blockStore();
  }
};

loadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js", celebrationStart, document.body);
