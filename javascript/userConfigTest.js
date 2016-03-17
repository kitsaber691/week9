// Different content depending on device, browser, OS, etc...

var mobile = (
  /iphone|ipad|ipod|android|blackberry|mini|windows|\sce|palm/i.test(navigator.userAgent.toLowerCase())
);

if(mobile){
  document.location = "artists-in-history.html";
} // Do NOT insert else or you WILL crash your browser with an infinite loop!