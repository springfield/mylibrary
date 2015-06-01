/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.jumbotron = element(by.css('.jumbotron'));
  this.h1 = this.jumbotron.element(by.css('h1'));
  this.books = element(by.css('body')).all(by.repeater('book in ctrl.books'));
};

module.exports = new MainPage();
