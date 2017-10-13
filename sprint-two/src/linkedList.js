var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    var currentNode = list.tail;
    if (!list.head && !list.tail) {
      list.head = newNode;
    //  list.tail = newNode;
    } else {
    //  list.tail = newNode;
      currentNode.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var node = list.head;
    // delete node;
    list.head = node.next;
    return node.value;
  };

  list.contains = function(target) {
    var output = false;
    var node = list.head;
    while (node) {
      if (node.value === target) {
        output = true;
      }
      node = node.next
    }
    return output;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
