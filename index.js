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