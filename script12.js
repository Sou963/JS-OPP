//method overloading

class computer {
  computer_count(a, b, c) {
    if (arguments.length == 1) {
      console.log("The argument number is=", a);
    } else if (arguments.length == 2) {
      console.log("The argument number is=", b);
    } else if (arguments.length == 3) {
      console.log("The argument number is=", c);
    } else {
      console.log("There is no argument number");
    }
  }
}

var new_computer = new computer();
new_computer.computer_count(1,2,3);
