var BinarySearchTree = function(value) {
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  newBinarySearchTree = _.extend(newBinarySearchTree, binarySearchTreeMethods);
  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  var tree = BinarySearchTree(value);
  var currentTree = this;

  if (tree.value < currentTree.value) {
    if (currentTree.left === null) {
      currentTree.left = tree;
    } else {
      currentTree.left.insert(value);
    }
  }
  if (tree.value > currentTree.value) {
    if (currentTree.right === null) {
      currentTree.right = tree;
    } else {
      currentTree.right.insert(value);
    }
  }
  
  // var isInserted = false
  // while(isInserted === false) {
  //   if (tree.value < currentTree.value) {
  //     if (currentTree.left === null) {
  //       currentTree.left = tree;
  //       isInserted = true;
  //     } else {
  //       currentTree = currentTree.left;
  //     }
  //   }
  //   if (tree.value > currentTree.value) {
  //     if (currentTree.right === null) {
  //       currentTree.right = tree;
  //       isInserted = true;
  //     } else {
  //       currentTree = currentTree.right;
  //     }
  //   }
  // }

};

binarySearchTreeMethods.contains = function(value) {
  var currentTree = this;

  if (value === currentTree.value) {
  	return true;
  }
  if (value < currentTree.value) {
  	if (currentTree.left !== null) {
  	  return currentTree.left.contains(value);
  	} else {
  	  return false;
  	}
  }
  if (value > currentTree.value) {
  	if (currentTree.right !== null) {
      return currentTree.right.contains(value);
    } else {
  	  return false;
  	}
  }

  // while(currentTree !== null) {
  //   if (value === currentTree.value) {
  //     return true;
  //   }
  //   if (value < currentTree.value) {
  //     // if (currentTree.left !== null) {
  //       currentTree = currentTree.left;
  //     // } else {
  //     // 	return false;
  //     // }
  //   }
  //   if (value > currentTree.value) {
  //     // if (currentTree.right !== null) {
  //       currentTree = currentTree.right;
  //     // } else {
  //     //   return false;
  //     // }
  //   }
  // }
  // return false;

};

binarySearchTreeMethods.depthFirstLog = function(cb) {
  var currentTree = this;
  
  cb(currentTree.value);
  if (currentTree.left !== null) {
    currentTree.left.depthFirstLog(cb);
  }
  if (currentTree.right !== null) {
  	currentTree.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log(n))
 * contains: O(log(n))
 * depthFirstLog: O(n)
 */
