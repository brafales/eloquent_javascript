function isEven(number) {
  var abs_number = Math.abs(number);
  if (abs_number == 0)
    return true;
  else if (abs_number == 1)
    return false;
  else
    return isEven(abs_number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
