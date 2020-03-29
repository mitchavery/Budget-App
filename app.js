var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  };
})();

var UIController = (function() {
  //Some code
})();

var controller = (function(budgetCtrl, UICtrl) {
  //some code
})(budgetController, UIController);
