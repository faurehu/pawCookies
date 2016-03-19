function onCreate(newPanel) {
    var port = chrome.runtime.connect({name: "Paw"});
    var app;

    // Maintain the communication with the background
    port.onMessage.addListener(function(msg) {
      if(app) {
        app.doSomething(msg);
      }
    });

    // Kickstart the application
    newPanel.onShown.addListener(function tmp(panelWindow) {
        newPanel.onShown.removeListener(tmp);
        // Save the window in a variable
        app = panelWindow;
        // Tell the background it's ready to fetch the cookies
        port.postMessage({started: true});
    });
}

// Create the panel and pass onCreate for callback
chrome.devtools.panels.create("Paw Cookies",
    null,
    "app/mainPanel.html",
    onCreate
);
