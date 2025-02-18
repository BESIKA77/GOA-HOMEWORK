function Books(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;

    this.details = function() {
        return `${this.title} written by ${this.author}, published in the year ${this.publicationYear}.`;
    };
}

const book1 = new Books("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Books("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Books("1984", "George Orwell", 1949);

console.log(book1.details());
console.log(book2.details());
console.log(book3.details());
