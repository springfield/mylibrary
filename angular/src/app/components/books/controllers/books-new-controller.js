'use strict';

angular.module('mylibrary.books.controllers.new', [])
  .controller('BooksNewController', [function() {
    var self = this;

    self.reset = function() {
      self.book = {};
    };

    self.save = function() {
      self.book.id = self.books.length + 1;
      self.books.push(self.book);
      self.reset();
    };

    self.reset();
  }]);
