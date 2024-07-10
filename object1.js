var book=
{
  title : "My Experiments with truth",
  aruthor:"Gandhi",
  yearPublished: 1940,
  printBookdata: function()
  {
    console.log("The book titled:"+ this.title + " is written by:" + this.aruthor);
  }
};
console.log(book.printBookdata());