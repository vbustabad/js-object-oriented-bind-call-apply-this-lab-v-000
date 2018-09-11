//Your code here

let justInvoke(returnsThisAndArgs) = {
  function() {
    function(returnsThisAndArgs) {
        return this;
    }
    return returnsThisAndArgs();
  }
};
   