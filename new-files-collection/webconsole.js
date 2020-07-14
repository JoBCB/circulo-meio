function log(message) {
  console.log(message);
  var logArea = document.getElementById('log');
  console.log(logArea);
  logArea.innerText = logArea.innerText + message;
}

function start() {
  console.log('starting...');
  log('Something ...');
  console.log('... finished');
}

start();