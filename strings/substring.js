var string1 = "Queue";
var resultSubString1 = applySubString(string1, 1, 4);
console.log('should log "ueu":', resultSubString1);

var string2 = "Stack Trace";
var resultSubString2 = applySubString(string2, 2, 10);
console.log('should log "ack Trac":', resultSubString2);

function applySubString(string, start, end) {
  // create a subString variable
  // assign it to a portion of the string from before start, up to, but not including end
  // return the subString variable
  let substring;
  substring = string.substring(start, end);
  return substring;
}
