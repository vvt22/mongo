const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("listening at 3000");
});
//routes
app.get("/books", (req, res) => {
  res.json({ msgg: "welcome " });
});
