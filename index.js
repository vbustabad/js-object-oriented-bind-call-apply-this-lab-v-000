//Your code here

let justInvoke = {
    function(returnsThisAndArgs) {
        return this;
    }
    return returnsThisAndArgs();
  }
};

// function() {