var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var output = storage[0];
    delete storage[0];
    count--;
    for (var i = 0; i < count; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[count];
    return output;
  };

  someInstance.size = function() {
    if (count < 0) {
      count = 0;
    }
    return count;
  };

  return someInstance;
};
