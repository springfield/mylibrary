'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3001/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1.getText()).toBe('MyLibrary');
  });

  it('list more than 4 books', function () {
    expect(page.books.count()).toBeGreaterThan(4);
  });

});
