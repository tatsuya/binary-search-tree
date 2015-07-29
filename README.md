# binary-search-tree

JavaScript implementation of binary search tree.

## Usage

```js
var BinarySearchTree = require('./');

var tree = new BinarySearchTree();

tree.add(3);
tree.add(2);
tree.add(4);
tree.add(1);
tree.add(5);

tree.toArray()  // [1, 2, 3, 4, 5]
```

## API

### BinarySearchTree#add(value)

Add a new node into the binary search tree.

### BinarySearchTree#contains(value)

Determine whether or not the value is present in the tree.

### BinarySearchTree#size()

Get the number of nodes exist in the tree.

### BinarySearchTree#toArray()

Convert the tree to array.
