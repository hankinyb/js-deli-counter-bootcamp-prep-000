var katzDeli = [];

function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson);
  
  return (`Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`);
  
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return ('There is nobody waiting to be served!');
  }
  else {
    var shifted = katzDeli.shift();
    return (`Currently serving ${shifted}.`);
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return (`The line is currently empty.`);
  } 
  else {
    var i;
    for (i = 0; i < katzDeli.length; i++) {
    return ("The line is currently:" + [i]+1+"." + katzDeli[i])
  }}
}