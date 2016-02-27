exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
	 var defer = $.Deferred();
    setTimeout(function() {
      defer.resolve(value);
    }, 10);
    return defer.promise();
  },

  manipulateRemoteData : function(url) {
	 
  }
};
