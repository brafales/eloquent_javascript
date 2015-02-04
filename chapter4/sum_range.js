function range(start, end, step){
  function check_positive(current, end){
    return (current <= end)
  };

  function check_negative(current, end){
    return (current >= end)
  };

  if(step == 0 || !step)
    step = (end < start) ? -1 : 1;
  var result = [];
  var current = start;

  var comparer;

  if (step > 0)
    comparer = check_positive;
  else
    comparer = check_negative;

  while(comparer(current, end)){
    result.push(current);
    current += step;
  }
  return result;
}

function sum(numbers) {
  if(numbers.length == 0)
    return 0;
  else {
    var current = numbers.shift();
    return current + sum(numbers);
  }
}

console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
