exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
	var timeout;
    function counter() {
      start++;

      if (start <= end) {
        timeout = setTimeout(counter, 100);
      }
    }

    counter();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
