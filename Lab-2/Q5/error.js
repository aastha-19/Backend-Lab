import fs from "fs";

const errorfile = fs.createReadStream("missing.txt");

errorfile.on("error", (err) => {
  console.error("Error!");
});
