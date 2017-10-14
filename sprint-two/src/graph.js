

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // for (var i = 0; i < this.nodes.length; i++) {
  //   if (this.nodes[i] === node) {
  //     return true;
  //   }
  // }
  // return false;
  if (this.nodes.indexOf(node) !== -1) {
  	return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for (var i = 0; i < this.nodes.length; i++) {
  //   if (this.nodes[i] === node) {
  //     this.nodes.splice(i, 1);
  //   }
  // }
  var index = this.nodes.indexOf(node)
  if (index !== -1) {
   this.nodes.splice(index, 1);
  }
  for (var j = 0; j < this.edges.length; j++) {
    if (this.edges[j].fromNode === node || this.edges[j].toNode === node) {
      this.edges.splice(j, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i].fromNode === fromNode && this.edges[i].toNode === toNode) || (this.edges[i].fromNode === toNode && this.edges[i].toNode === fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push({fromNode: fromNode, toNode: toNode});
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i].fromNode === fromNode && this.edges[i].toNode === toNode) || (this.edges[i].fromNode === toNode && this.edges[i].toNode === fromNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * removeNode: O(n)
 * hasEdge: O(n)
 * addEdge: O(1)
 * removeEdge: O(n)
 * forEachNode: O(n)
 */


