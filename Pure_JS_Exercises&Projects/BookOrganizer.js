const books = [
  {
    title: "T1",
    authorName: "A1",
    releaseYear: 2003
  },
  {
    title: "T2",
    authorName: "A2",
    releaseYear: 2002
  },
  {
    title: "T3",
    authorName: "A1",
    releaseYear: 2003
  },
  {
    title: "T4",
    authorName: "A4",
    releaseYear: 1904
  },
  {
    title: "T5",
    authorName: "A5",
    releaseYear: 2004
  },
];
 
function sortByYear(book1, book2) {
  if(book1.releaseYear < book2.releaseYear) {
    return -1;
  }else if(book1.releaseYear > book2.releaseYear) {
    return 1;
  }else {
    return 0;
  }
}
 
let filteredBooks = books.filter((book) => {return book.releaseYear<=1950});
 
console.log(filteredBooks);
 
filteredBooks.sort(sortByYear);
