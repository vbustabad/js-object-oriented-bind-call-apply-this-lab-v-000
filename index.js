//Your code here

const justInvoke(returnsThisAndArgs) = {
    function() {
      function(returnsThisAndArgs) {
          return this;
      }
      return returnsThisAndArgs();
    }
};

// function() {
