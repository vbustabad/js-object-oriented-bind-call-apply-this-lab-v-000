//Your code here

function justInvoke(returnsThisAndArgs) {
      function(returnsThisAndArgs) {
          return this;
      }
      return returnsThisAndArgs();
    }
};

// function() {
