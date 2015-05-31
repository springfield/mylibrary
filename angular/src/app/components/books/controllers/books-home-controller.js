'use strict';

angular.module('mylibrary.books.controllers.home', [])
  .controller('BooksHomeController', [function() {
    this.books = [
      {
        'id': 1,
        'title': 'Moby-Dick',
        'author': 'Herman Melville',
        'read': 0,
        'pages': 927
      },
      {
        'id': 2,
        'title': 'A Game of Thrones',
        'author': 'George R. R. Martin',
        'read': 1,
        'pages': 704
      },
      {
        'id': 3,
        'title': 'A Clash of Kings',
        'author': 'George R. R. Martin',
        'read': 0,
        'pages': 768
      },
      {
        'id': 4,
        'title': 'A Storm of Swords',
        'author': 'George R. R. Martin',
        'read': 0,
        'pages': 992
      }
    ];
  }]);
