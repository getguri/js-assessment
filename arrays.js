exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
	var summation = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      summation += arr[i];
    }

    return summation;
  },

  remove : function(arr, item) {
	var finalArray = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        finalArray.push(arr[i]);
      }
    }

    return finalArray;
  },

  removeWithoutCopy : function(arr, item) {
  

  },

  append : function(arr, item) {
	arr.push(item);
    return arr;
  },

  truncate : function(arr) {
	arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
	arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
	arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
	return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
	arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
	var count = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
	var seen = [];
    var duplicates = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        duplicates.push(parseInt(item));
      }
    }

    return duplicates;
  },

  square : function(arr) {
	var finalArray = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      finalArray.push(arr[i] * arr[i]);
    }

    return finalArray;
  },

  findAllOccurrences : function(arr, target) {
	
  }
};
