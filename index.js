//Your code here

let justInvoke(returnsThisAndArgs) = {
    function(returnsThisAndArgs) {
        return this;
    }
    return returnsThisAndArgs();
  }
};

// function() {
