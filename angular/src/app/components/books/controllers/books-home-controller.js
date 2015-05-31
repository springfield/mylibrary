'use strict';

angular.module('mylibrary.books.controllers.home', [])
  .controller('BooksHomeController', ['books', function(books) {
    this.books = books;
  }]);
