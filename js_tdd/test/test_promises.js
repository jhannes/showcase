/* global describe, it, Promise */

var expect = require('chai').expect;

describe('promises', function() {

  it('can be resolved', function(done) {
    var promise = new Promise(function(resolve) {
      resolve();
    });

    promise.then(function() {
      done();
    });
  });
    
  it('can pass resolution value', function(done) {
    var promise = new Promise(function(resolve) {
      resolve(6*7);
    });

    promise.then(function(value) {
      expect(value).to.equal(42);
    }).then(done);
  });

  it('can return the promise to mocha', function() {
    var promise = new Promise(function(resolve) {
      resolve(6*7);
    });

    return promise.then(function(value) {
      expect(value).to.equal(42);
    });
  });

  it('can pass values in a promise chain', function() {
    var promise = new Promise(function(resolve) {
      resolve(6);
    });

    return promise.then(function(v) {
      return v*7;
    }).then(function(v) {
      expect(v).to.equal(42);
    });
  });

  it('can resolve multiple promises', function() {
    var promise = new Promise(function(resolve) {
      resolve(['abc', 'def', 'gh']);
    });

    return promise.then(function(array) {
      return Promise.all(array.map(function(v) {
        return new Promise(function(resolve) {
          resolve(v.length);
        })
      }));
    }).then(function(lengthArray) {
      expect(lengthArray).to.eql([3,3,2]);
    });
  });
  

  it('can reject a promise', function() {
    var promise = new Promise(function(resolve, reject) {
      reject('something went wrong');
    });

    return promise.catch(function(error) {
      expect(error).to.equal('something went wrong');
    });
  });

  it('treats errors as rejections', function() {
    var promise = new Promise(function(resolve, reject) {
      resolve(null);
    });

    return promise.then(function(value) {
      return value.length;
    }).catch(function(error) {
      expect(error.message).to.eql("Cannot read property 'length' of null");
    });
  });

  it('propagates failure to the first failure handler', function() {
    var promise = new Promise(function(resolve, reject) {
      resolve(null);
    });

    return promise.then(function(value) {
      return value.length; // Throws Error
    }).then(function(length) {
      this.test.error("never called");
    }).then(function(number) {
      this.test.error("never called");
    }).catch(function(error) {
      expect(error.message).to.eql("Cannot read property 'length' of null");
    });
  });
});