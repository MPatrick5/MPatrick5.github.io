const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question
rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close(); // Close the interface
});
