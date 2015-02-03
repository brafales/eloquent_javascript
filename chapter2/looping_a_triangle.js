function loop(times) {
  var line = '#';
  while (line.length <= times) {
    console.log(line);
    line += '#';
  }
}

loop(7);
