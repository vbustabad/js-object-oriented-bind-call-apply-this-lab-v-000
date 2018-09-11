//Your code here

justInvoke(returnsThisAndArgs) = {
    function(returnsThisAndArgs) {
        return this;
    }
    return returnsThisAndArgs();
  }
};

// function() {
