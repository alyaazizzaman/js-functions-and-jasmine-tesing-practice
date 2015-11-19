module.exports = {

  first: function(array) {
    if (array.length === 0) {
    return undefined;
    } else {
    return array [0];
    }},

  last: function(array) {
    if (array.length === 0) {
      return undefined;
    } else {
    return array[array.length-1];
    }
  },

  empty: function(array) {
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  },

  first_n: function(array, n) {
    if (array.length === 0) {
      return ([]);
    } else if (array.length < n) {
      return array;
    } else {
      return (array.splice(0, n));
    }
  },

  last_n: function(array, n) {
    var answer = [];
    var length = array.length;
    if(length > 0) {
      if (n < length) {
        answer = array.slice(0 - n);
      } else {
        answer = array.slice(0 - length);
      }
    }
    return answer;
  },

  drop: function(array, n) {
    if (n > array.length) {
      return [];
    }
    var result = array;
    for (var i = 0; i < n; i++) {
      result.shift();
    }
    return result;
  },

  union: function(arrayOne, arrayTwo) {
    var newArray = [];
    for(var i = 0; i < arrayOne.length; i++) {
      newArray.push(arrayOne[i]);
    }
    for(var j = 0; j < arrayTwo.length; j++) {
      newArray.push(arrayTwo[j]);
    }
    return newArray;
  },

  intersection: function(array, arrayTwo) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < arrayTwo.length; j++) {
        if(array[i] === arrayTwo[j]) {
          newArray.push(array[i]);
          }
        }
      }
      return newArray;
    }

}
