import fs from "fs";

const readfile = "data.txt";

if (fs.existsSync(readfile)) {
  const data = fs.readFileSync(readfile, "utf8");
  console.log(data);
} else {
  console.log("File is missing!");
}
