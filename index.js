// Iterates over a collection and calls the callback on each element
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  // Creates a new array populated with the results of calling a provided function on every element in the collection
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  // Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
  function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  // Returns the first element in the collection that satisfies the provided testing function
  function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
    return undefined;
  }
  
  // Creates a new array with all elements that pass the test implemented by the provided function
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      for (const key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  // Returns the number of values in the collection
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Returns the first element of the collection. If n is provided, returns the first n elements
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // Returns the last element of the collection. If n is provided, returns the last n elements
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Retrieves all the names of the object's own enumerable properties
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Retrieves all the values of the object's own properties
  function myValues(object) {
    return Object.values(object);
  }
  