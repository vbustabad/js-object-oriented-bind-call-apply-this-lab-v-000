//Your code here

let justInvoke() = {
  function() {
    function(returnsThisAndArgs) {
        return this;
    }
    return returnsThisAndArgs();
  }
};
