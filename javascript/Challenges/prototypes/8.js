function Library() {
  // Initialize books property
  this.books = [];
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function (book) {
  this.books.push(book);
};
// Define findBook method on Library's prototype
Library.prototype.findBook = function (title) {
  let len = this.books.length;
  for (let i = 0; i <= len; i++) {
    console.log(i);
    if (this.books[i] == title) {
      return `Book found`;
    }
  }
  return `Book not found`;
};

const library = new Library();
library.addBook("The Catcher in the Rye");
library.addBook("Moy-Dick");
console.log(library.books);
console.log(library.findBook("Moy-Dick"));
