//Encapsulation using construction function

function create_counter() {
  var count = 0;

  this.increment = () => {
    count++;
  };
  this.decrement = () => {
    count--;
  };
  this.get_output = () => {
    return count;
  };
}

var obj = new create_counter();
obj.increment(); //1
obj.increment(); //2
obj.increment(); //3
obj.increment(); //4
obj.increment(); //5
obj.decrement(); //4
obj.decrement(); //3
console.log(obj.get_output());
