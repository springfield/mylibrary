'use strict';

angular.module('mylibrary.books.controllers.list', [])
  .controller('BooksListController', function() {
    this.bookReadClass = function(book) {
      return book.read ? 'glyphicon-ok text-success' : 'glyphicon-remove text-danger';
    };
  });
