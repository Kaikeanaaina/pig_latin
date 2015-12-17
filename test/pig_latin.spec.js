var chai = require('chai');

var expect = chai.expect;

chai.should();

var pigLatin = require('./../index.js');

desribe('Pig Latin', function () {
  it('should be a function', function(){
    expect(pigLatin).to.exist;
    expect(pigLatin).to.be.a('function');
  });
} );