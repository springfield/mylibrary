'use strict';

angular.module('mylibrary.books.directives.list', [])
  .directive('booksList', function() {
    return {
      scope: {
        books: '='
      },
      restrict: 'E',
      templateUrl: 'app/components/books/views/books-list.html',
      controller: 'BooksListController',
      controllerAs: 'ctrl',
      bindToController: true
    };
  });
