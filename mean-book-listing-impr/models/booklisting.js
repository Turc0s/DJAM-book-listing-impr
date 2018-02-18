
const mongoose = require("mongoose");

const BookListingSchema = mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_year: String,
    publisher: String,
    updated_date: { type: Date, default: Date.now },
});

var BookListing = module.exports = mongoose.model("Book", BookListingSchema);

// Get BookListings
module.exports.getBookListings = (callback, limit) => {
    BookListing.find(callback).limit(limit);
}

// get a single BookListing  by id
module.exports.getBookListingById = (id, callback) => {
    BookListing.findById(id, callback);
}

// post new BookListing 
module.exports.addBookListing = (reguser, callback) => {
    BookListing.create(reguser, callback);
}

// Update BookListing 
module.exports.updateBookListing = (id, booklisting, options, callback) => {
    var query = {_id: id};
    var update = {
        isbn: booklisting.isbn,
        title: booklisting.title,
        author: booklisting.author,
        description: booklisting.description,
        published_year: booklisting.published_year,
        publisher: booklisting.publisher,
        updated_date: booklisting.updated_date
    }
    BookListing.findByIdAndUpdate(query, update, options, callback);
}

// remove BookListing 
module.exports.removeBookListing = (id, callback) => {
    var query = {_id: id};
    BookListing.remove(query, callback);
}
