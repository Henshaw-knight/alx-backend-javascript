process.stdin.setEncoding('utf8');

console.log("Welcome to Holberton School, what is your name?");
process.stdin.on('readable', function() {
  let input = process.stdin.read();
  if (input !== null) {
    console.log(`Your name is: ${input}`);
  }
});

process.stdin.on('end', function() {
  console.log('This important software is now closing');
});
