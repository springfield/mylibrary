'use strict';

angular.module('mylibrary.books.directives.new', [])
  .directive('booksNew', function() {
    return {
      scope: {
        books: '='
      },
      restrict: 'E',
      templateUrl: 'app/components/books/views/books-new.html',
      controller: 'BooksNewController',
      controllerAs: 'ctrl',
      bindToController: true
    };
  });
