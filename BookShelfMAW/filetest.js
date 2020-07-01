//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const mawdebug = true;
//joining path of directory
const directoryPath = path.join('L:\\_test');

function listbooks (books) {
  console.table(books);
}


//passing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    class Author{
      constructor(dirname) {
        this.dirname= dirname;
      }
    }
    class Book{
      constructor(dirname) {
        this.dirname= dirname;
      }
    }
    const authors = [];
    const books = [];

    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        if (file != "_sort") {
          authors.push(file);
        }
    });
    if(mawdebug) {console.table(authors)}

    authors.forEach(function(author) {
      const directoryPathAuthor = directoryPath + '\\'+ author;
      fs.readdir(directoryPathAuthor, function (err, files) {
          if (err) {
              return console.log('Unable to scan directory: ' + err);
          }
          files.forEach(function (file) {
              if (file != "_sort") {
                books.push(author + '\\' + file);
                //console.log(directoryPath + "\\" + author + "\\" + file);
              }
          });
          //if(mawdebug) {console.log(books)}
          listbooks(books);
    });
  });
});
