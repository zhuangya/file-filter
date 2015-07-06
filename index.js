'use strict';

var fs = require('fs');
var byline = require('byline');
var through = require('through');

byline(fs.createReadStream('from', {
  encoding: 'utf8'
})).pipe(through(function (data) {

  // filter.
  if (/^ca+t$/.test(data)) {
    this.queue(data);
    this.queue('\n');//NOTICE: line break manually
  }

})).pipe(fs.createWriteStream('to'));
