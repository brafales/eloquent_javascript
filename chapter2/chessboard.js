function line(length) {
  var line = '';
  while(line.length < length){
    if(line.length % 2 == 0)
      line += ' ';
    else
      line += '#';
  }
  return line;
}

function grid(lines) {
  var i = 0;
  var grid = '';
  while (i < lines){
    if (i % 2 == 0)
      grid += ' ';
    grid += line(lines);
    grid += '\n';
    i++;
  }
  return grid;
}

console.log(grid(8));
