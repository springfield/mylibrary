'use strict';

describe('BooksNewController', function() {
  var ctrl, mockBackend;

  beforeEach(function() {
    module('mylibrary.books.controllers.new');
    module('mylibrary.books.services');
    module('ngResource');
    inject(function($controller, $httpBackend) {
      ctrl = $controller('BooksNewController');
      mockBackend = $httpBackend;
      mockBackend.expectPOST('/api/books').respond({
        id: 1,
        title: 't1',
        author: 'a1',
        read: true,
        pages: 100
      });
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
    mockBackend.flush();
    expect(ctrl.books.length).toBe(1);
    expect(ctrl.books[0].id).toEqual(1);
    expect(ctrl.books[0].title).toEqual('t1');
    expect(ctrl.books[0].author).toEqual('a1');
    expect(ctrl.books[0].read).toEqual(true);
    expect(ctrl.books[0].pages).toEqual(100);
    expect(ctrl.book).toEqual({});
  });
});
