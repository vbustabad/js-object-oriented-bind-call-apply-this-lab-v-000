//Your code here

justInvoke(returnsThisAndArgs) = {
    function() {
    function(returnsThisAndArgs) {
        return this;
    }
    return returnsThisAndArgs();
  }
};

// function() {
