'use strict';

angular.module('mylibrary.books.controllers.new', [])
  .controller('BooksNewController', ['Book', function(Book) {
    var self = this;

    self.reset = function() {
      self.book = {};
    };

    self.save = function() {
      Book.createNew(self.book).then(function(book) {
        self.books.push(book);
        self.reset();
      });
    };

    self.reset();
  }]);
