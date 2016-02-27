exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
	
  },

  alterObjects : function(constructor, greeting) {
	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
	 var finalArray = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        finalArray.push(prop + ': ' + obj[prop]);
      }
    }

    return finalArray;
  }
};
