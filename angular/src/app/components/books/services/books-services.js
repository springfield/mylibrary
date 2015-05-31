'use strict';

angular.module('mylibrary.books.services', [])
  .factory('Book', ['$resource', function($resource) {
    var Book = $resource('/api/books/:bookId', {}, {
      update: { method: 'PUT' }
    });

    Book.createNew = function(bookData) {
      var newBook = new Book(bookData);
      return newBook.$save();
    };

    return Book;
  }]);
