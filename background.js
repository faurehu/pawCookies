// Connect with the devtool process
var ports = [];
chrome.runtime.onConnect.addListener(function(newPort) {
  if (newPort.name !== "Paw") return;
  ports.push(newPort);

  // Make sure ports disconnect clean
  newPort.onDisconnect.addListener(function() {
      var i = ports.indexOf(port);
      if (i !== -1) ports.splice(i, 1);
  });

  // When message received from devtool process, send the cookies
  newPort.onMessage.addListener(function(msg) {
    if(msg.started) {
      chrome.cookies.getAll({}, sendCookies);
    }
  });
});

function sendCookies(cookies) {
  ports.forEach(function(port) {
      port.postMessage(cookies);
  });
}
