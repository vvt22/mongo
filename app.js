const express = require("express");
const { getDb, connectToDb } = require("./db");
const app = express();
let db;
//we can communicate with database using db variable
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
  let books = [];
  db.collection("books") //in shell ... db.books
    .find() ////info in txt file
    .sort({ author: 1 })
    .forEach((book) => books.push(book)) //async
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "couldnt fetch" });
    });
});
