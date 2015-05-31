'use strict';

describe('BooksListController', function() {
  var ctrl;

  beforeEach(function() {
    module('mylibrary.books.controllers.list');
    inject(function($controller) {
      ctrl = $controller('BooksListController');
    });
  });

  it('should return appropriate class', function() {
    var book = { read: false };
    expect(ctrl.bookReadClass(book)).toEqual('glyphicon-remove text-danger');

    book.read = true;
    expect(ctrl.bookReadClass(book)).toEqual('glyphicon-ok text-success');
  });
});
