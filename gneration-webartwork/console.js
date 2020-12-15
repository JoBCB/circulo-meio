// script by waynegraham 
// https://gist.github.com/waynegraham/5766565

if (typeof console  != "undefined") 
  if (typeof console.log != 'undefined')
    console.olog = console.log;
else
  console.olog = function() {};

console.log = function(message) {
  console.olog(message);
  $('#console').prepend('<p>' + message + '</p>');
};
console.error = console.debug = console.info =  console.log
