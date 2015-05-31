'use strict';

describe('BooksNewController', function() {
  var ctrl;

  beforeEach(function() {
    module('mylibrary.books.controllers.new');
    inject(function($controller) {
      ctrl = $controller('BooksNewController');
    });
  });

  it('should add new book', function() {
    ctrl.books = [];
    ctrl.book = {
      title: 't1',
      author: 'a1',
      read: true,
      pages: 100
    };

    ctrl.save();
    expect(ctrl.books.length).toBe(1);
    expect(ctrl.books).toEqual([{
      id: 1,
      title: 't1',
      author: 'a1',
      read: true,
      pages: 100
    }]);
    expect(ctrl.book).toEqual({});
  });
});
