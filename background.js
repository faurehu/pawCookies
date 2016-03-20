// Connect with the devtool process
const ports = [];
chrome.runtime.onConnect.addListener(function onConnect(newPort) {
  if (newPort.name !== 'Paw') {
    return;
  }
  ports.push(newPort);

  // Make sure ports disconnect clean
  newPort.onDisconnect.addListener(function disconnectListener() {
    const i = ports.indexOf(newPort);
    if (i !== -1) {
      ports.splice(i, 1);
    }
  });

  // When message received from devtool process, send the cookies
  newPort.onMessage.addListener(function onMessageListener(msg) {
    if (msg.started) {
      chrome.cookies.getAll({}, sendCookies);
    }
  });
});

function sendCookies(cookies) {
  ports.forEach(function sendMessage(port) {
    port.postMessage(cookies);
  });
}
