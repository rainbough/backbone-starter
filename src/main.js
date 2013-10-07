
var bookOne = new Book({
	title: "To Kill a Mockinbird",
	author: "Harper Lee",
	price: 29.99
});
var bookTwo = new Book({
	title: "The Moon is a Harsh Mistress",
	author: "Robert A. Heinlein",
	price: 59.99
});

var books = [bookOne, bookTwo];

// Create a view for each book and add that view's element to the page.
_.each(books, function (book) {
  var view = new BookView({ model: book });
  view.render();
  $('#books').append(view.el);
});
