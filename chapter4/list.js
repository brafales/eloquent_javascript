function arrayToList(array){
  var list = null;

  for(var i = 0; i < array.length; i++){
    list = prepend(array[array.length - i - 1], list);
  }

  return list;
}

function listToArray(list){
  var array = [];
  var head = list;

  while(head){
    array.push(head.value);
    head = head.rest;
  }

  return array.reverse();
}

function prepend(element, list){
  var node = {
    value: element,
    rest: list
  };

  return node;
}

function nth(list, n){
  var head = list;
  var element;
  var i = 0
  while(head.rest && i < n){
    head = head.rest;
    i++;
  }

  if(i == n){
    element = head.value;
  }

  return element;

}

var array = [1, 2, 3];
var list = arrayToList(array);
console.log(list);
console.log(nth(list, 0));
console.log(nth(list, 1));
console.log(nth(list, 2));
console.log(nth(list, 3));
var array_again = listToArray(list);
console.log(array_again);
