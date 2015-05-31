'use strict';

angular.module('mylibrary.books.controllers.edit', [])
  .controller('BooksEditController', [
    '$state',
    'book',
    function($state, book) {
      var self = this;

      self.book = book;

      self.update = function() {
        self.book.$update(function() {
          $state.go('home');
        });
      };
  }]);
