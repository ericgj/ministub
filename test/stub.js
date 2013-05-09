
// var mocha   = require('mocha')
// mocha.setup('bdd');

var expect = require('expect.js')
  , stub   = require('../index.js')

describe('ministub', function(){

  it('should stub method with value', function(){
    stub(Math, 'sqrt', 'stubbed', function(){
      expect(Math.sqrt(25)).to.equal('stubbed');
    })
    expect(Math.sqrt(25)).to.equal(5);
  });

  it('should stub method with function', function(){
    stub(Math, 'sqrt', function(v){ return -1;}, function(){
      expect(Math.sqrt(25)).to.equal(-1);
    })
    expect(Math.sqrt(25)).to.equal(5);
  });

  it('should yield stubbed object, and return passed function', function(){
    var val = stub(Math, 'sqrt', 'stubbed', function(obj){
      return obj.toString();
    });
    expect(val).to.equal('[object Math]');
    expect(Math.sqrt(25)).to.equal(5);
  });

})

