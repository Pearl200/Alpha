const express = require("express");
const router = express.Router();
const Book = require("./models/book");



//All BOoks Routes


router.get("/book", async(req, res) => {
    res.json("books");
  });




// Create Book Route

router.post("/book", async(req, res) => {
    const { title, author, pages, publicationDate, bookID } = req.body;
    const newBook = new Book(title, author, pages, publicationDate, bookID);
    books.push(newBook);
    console.log(newBook);
  
    res.status(201).json(newBook);
  });

//Get book by specific id route
 router.get("/book/:id", async(req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((book) => book.getId() === id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).send("Book not found");
    }
  });


  
//Delete book route

router.delete("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex((book) => book.getId() === id);
    if (index !== -1) {
      books.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.status(404).send("Book not found");
    }



// Route to update a book by ID
router.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, pages, publicationDate, bookID } = req.body;
    const index = books.findIndex((book) => book.getId() === id);
    if (index !== -1) {
      const updatedBook = new Book(
        title,
        author,
        pages,
        publicationDate,
        bookID
      );
      books[index] = updatedBook;
      res.json(updatedBook);
    } else {
      res.status(404).send("Book not found");
    }
  });

module.exports = router
