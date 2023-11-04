const express = require("express");
const app = express();
require("dotenv").config();

// middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

const names = [
  "John",
  "Alice",
  "Bob",
  "Eleanor",
  "David",
  "Linda",
  "Michael",
  "Sarah",
  "James",
  "Emily",
];
function g() {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

let reloadTimes = -1;
app.get("/", (req, res) => {
  ++reloadTimes;

  let randomName = names[g()];
  res.status(200).render("index", { randomName, reloadTimes });
});

/*=======================================================================================*/
// server panel
/*=======================================================================================*/

app.listen(process.env.PORT || 3000, () => {
  console.log("------------------------------");
  console.log("The shadow is online and ready");
  console.log("------------------------------");
});
