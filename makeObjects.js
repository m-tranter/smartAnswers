const fs = require("fs");
const {parse} = require("csv-parse");

const data = [];

fs.createReadStream("./data.csv")
.pipe(parse({delimiter: ',', columns: true, ltrim: true,}))
.on("data", (row) => {
data.push(row);
})
.on("error", (err) => {
console.log(err.message);
})
.on("end", () => {
 fs.writeFileSync("dogBreeds.json", JSON.stringify(data));
});
