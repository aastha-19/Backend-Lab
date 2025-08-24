import fs from 'fs';

const writefile = fs.createWriteStream("output.txt");
writefile.write("Hello, Node.js!");
writefile.end();

console.log("Done.");
