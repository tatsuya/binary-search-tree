'use strict';

var assert = require('assert');
var BinarySearchTree = require('./');

describe('BinarySearchTree', function() {
  var tree = null;

  beforeEach(function() {
    tree = new BinarySearchTree();
  });

  afterEach(function() {
    tree = null;
  });

  it('should initially contain zero nodes', function() {
    assert.equal(tree.size(), 0);
  });

  describe('#add(value)', function() {
    it('should add a value to the tree', function() {
      tree.add(3);
      tree.add(2);
      tree.add(4);
      tree.add(1);
      tree.add(5);
      assert.equal(tree.size(), 5);
    });
  });

  describe('#contains(value)', function() {
    it('should see if the given value is exist in the tree', function() {
      tree.add(3);
      tree.add(2);
      tree.add(4);
      tree.add(1);
      tree.add(5);
      assert.equal(tree.contains(4), true);
      assert.equal(tree.contains(6), false);
    });
  });

  describe('#toArray()', function() {
    it('should convert the tree to array', function() {
      tree.add(3);
      tree.add(2);
      tree.add(4);
      tree.add(1);
      tree.add(5);
      assert.deepEqual(tree.toArray(), [1, 2, 3, 4, 5]);
    });
  });
});