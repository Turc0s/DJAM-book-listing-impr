
const express = require("express");
const router = express.Router();

const BookListing = require("../models/booklisting");

// Get all registered user
router.get("/", (req, res) => {
    BookListing.getBookListings((err, booklisting) => {
        if (err) {
            throw err;
        }
        res.json(booklisting);
    });
});

//  Get a single registered user 
router.get("/:id", (req, res) => {
    BookListing.getBookListingById(req.params.id, (err, booklisting) => {
        if (err) {
            throw err;
        }
        res.json(booklisting);
    });
});

// add new registered user
router.post("/", (req, res) => {
    var booklisting = req.body;
    BookListing.addBookListing(booklisting, (err, booklisting) => {
        if (err) {
            throw err;
        }
        res.json(booklisting);
    });
});

//update registered user
router.put("/:id", (req, res) => {
    var id = req.params.id;
    var booklisting = req.body;
    BookListing.updateBookListing(id, booklisting, {}, (err, booklisting) => {
        if(err) {
            throw err;
        }
        res.json(booklisting);
    });
});

// remove registered user
router.delete("/:id", (req, res) => {
    var id = req.params.id;
    BookListing.removeBookListing(id, (err, booklisting) => {
        if (err) {
            throw err;
        }
        res.json(booklisting);
    });
});

module.exports = router;
