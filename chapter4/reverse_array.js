function reverseArray(array){
  var reversed = [];
  for (i= 0; i < array.length; i++){
    reversed.unshift(array[i]);
  }

  return reversed;
}

function reverseInPlace(array){
  for(var i = 0; i < array.length/2; i++){
    var temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
}

var sample = [1,2,3,4,5];
var reversed = reverseArray(sample);
console.log("Original: " + sample);
console.log("Reversed: " + reversed);

reverseInPlace(sample);

console.log("Original reversed in place: " + sample);
