var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree = _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var output = false;
  var rec = function(node) {
    if (node.value === target) {
      output = true;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
	    output = rec(node.children[i]);
	  }
    }
    return output;
  };
  rec(this);
  return output;
  // tree = tree || this;
  // var output = false;
  // if (this.value === target) {
  //   output = true;
  // }
  // if (this.children.length > 0) {
  //   for (var i = 0; i < this.children.length; i++) {
  //     this.children[i].contains(target);
  //   }
  // }
  // return output;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
