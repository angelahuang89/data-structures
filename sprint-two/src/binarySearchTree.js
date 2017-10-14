var BinarySearchTree = function(value) {
  var newBinarySearchTree = {};
  newBinarySearchTree = _.extend(newBinarySearchTree, binarySearchTreeMethods);
  this.children = [];
  this.left = null;
  this.right = null;
  this.value = value;
  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    }
    if (this.left.left !== null) {
      if (value < this.left.left.value) {
        this.left.left = BinarySearchTree(value);
      }
    }
    if (this.left.right !== null) {
      if (value > this.left.right.value) {
        this.left.right = BinarySearchTree(value);
      }
    }
  }
  if (value > this.value) {
  	if (this.right === null) {
  	  this.right = BinarySearchTree(value);
  	}
  	if (this.right.left !== null) {
  	  if (value < this.right.left.value) {
  	  	this.right.left = BinarySearchTree(value);
  	  }
  	}    
  	if (this.right.right !== null) {
      if (value > this.right.right.value) {
        this.right.right = BinarySearchTree(value);
      }
    }
  }
 //  if (value < this.value) {
 //  	if (this.children[0] === null) {
 //  	  this.left = BinarySearchTree(value);
 //  	  this.children[0] = this.left;
 //  	}
	// if (this.children[0].children[0] === null) {
	//   this.children[0].left = BinarySearchTree(value);
	//   this.children[0].children[0] = this.children[0].left;
	// }
 //  }
 //  if (value > this.value) {
 //  	if (this.children[1] === null) {
 //  	  this.right = BinarySearchTree(value);
 //  	  this.children[1] = this.right;
 //  	}
 //  	if (this.children[1].children[1] === null) {
	//   this.children[1].right = BinarySearchTree(value);
	//   this.children[1].children[1] = this.children[1].right;
	// }
 //  }
};

binarySearchTreeMethods.contains = function(value) {

};

binarySearchTreeMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
