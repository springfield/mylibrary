'use strict';

angular.module('mylibrary.books.routes', [
  'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/books/views/books-home.html',
        controller: 'BooksHomeController',
        controllerAs: 'ctrl',
        resolve: {
          books: function(Book) {
            return Book.query().$promise;
          }
        }
      })
      .state('edit', {
        url: '/books/:bookId/edit',
        templateUrl: 'app/components/books/views/books-edit.html',
        controller: 'BooksEditController',
        controllerAs: 'ctrl',
        resolve: {
          book: function($stateParams, Book) {
            return Book.get({bookId: $stateParams.bookId}).$promise;
          }
        }
      });

      $urlRouterProvider.otherwise('/');
  });
