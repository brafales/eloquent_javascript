function countChar(sequence, character){
  var count = 0;
  for(var i = 0; i < sequence.length; i++) {
    if (sequence.charAt(i) == character)
      count++;
  }
  return count;
}

function countBs(sequence) {
  return countChar(sequence, 'B');
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));
