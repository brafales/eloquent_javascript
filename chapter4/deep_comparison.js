function deepEqual(a, b){
  if(a == null && b == null) {
    return true;
  }
  if(typeof(a) != "object" && typeof(b) != "object"){
    return (a === b);
  }

  if(countProperties(a) != countProperties(b)){
    return false;
  }

  for(var prop in a){
    if(!deepEqual(a[prop], b[prop])){
      return false;
    }
  }

  return true;
}

function countProperties(obj){
  var count = 0;

  for(var prop in obj){
    count++;
  }

  return count;
}

// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, lol: 3}));
// → true
