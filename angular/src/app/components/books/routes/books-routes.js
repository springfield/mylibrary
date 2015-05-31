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
        controllerAs: 'ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });
