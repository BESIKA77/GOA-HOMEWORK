const books = {
    title: "გამოცდილი სათაური",
    author: "ახალი ავტორი",
    pages: 420,
    publicationYear: 2022,
    randomthing: function() {
      return `წიგნის სათაური: ${this.title}, ავტორი: ${this.author}, გვერდების რაოდენობა: ${this.pages}, გამოქვეყნების წელი: ${this.publicationYear}.`;
    }
  };
  
  console.log(books);
  
  console.log(books.title);
  console.log(books.author);
  console.log(books.pages);
  console.log(books.publicationYear);
  
  console.log(books["title"]);
  console.log(books["author"]);
  console.log(books["pages"]);
  console.log(books["publicationYear"]);
  
  console.log(books.randomthing());
  