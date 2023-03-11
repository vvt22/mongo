const express = require("express");
const app = express();
let db;

connectToDb((err) => {
  if (!err) {
    app.listen("3000", () => {
      console.log("app listening on port 3000");
    });
    db = getDb();
  }
});
//routes
app.get("/books", (req, res) => {
  res.json({ msgg: "welcome " });
});
