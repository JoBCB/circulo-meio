function log(message) {
  console.log(message);
  var logArea = document.getElementById('log');
  console.log(logArea);
  logArea.innerText = logArea.innerText + message;
}

function start() {
  console.log('starting...');
  log('message from the webconsole ...');
  console.log('... finished');
}

// start();