//Your code here

function justInvoke(returnsThisAndArgs) = {
    function() {
      function(returnsThisAndArgs) {
          return this;
      }
      return returnsThisAndArgs();
    }
};

// function() {
