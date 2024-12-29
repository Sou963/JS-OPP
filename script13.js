//Encapsulation using closures

function create_count() {
  var count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    get_element: function () {
      return count;
    },
  };
}
var obj = new create_count();
obj.increment(); //1
obj.increment(); //2
obj.increment(); //3
obj.increment(); //4
obj.increment(); //5
obj.decrement(); //4
obj.decrement(); //3
console.log(obj.get_element()); //3
