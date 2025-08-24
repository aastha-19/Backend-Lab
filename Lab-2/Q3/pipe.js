import fs from "fs";

const readfile = fs.createReadStream("input.txt");
const writefile = fs.createWriteStream("output.txt");

readfile.pipe(writefile);

console.log("Done piping.");
