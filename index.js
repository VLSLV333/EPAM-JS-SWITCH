const readline = require('readline'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); 
 
console.log('What do you prefer?'); 
console.log('1 a candy'); 
console.log('2 chocolate'); 
console.log('3 a cake'); 
 
rl.question('Enter your choice: ', (choice) => { 
  switch (choice) { 
    case '1': 
       console.log('You need 5 dollars.'); 
       break; 
    case '2': 
       console.log('You need 10 dollars.'); 
       break; 
    case '3': 
       console.log('You need 15 dollars.'); 
       break; 
    default: 
       console.log('Invalid choice'); 
  } 
 
  rl.close(); 
}) 

// smth wrong