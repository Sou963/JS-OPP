//method over ridding.

class father {
  computer() {
    var a = 10;
    var b = 20;
    var c = a + b;
    return c;
  }
}
class son extends father {
  computer() {
    var a = 200;
    var b = 300;
    var c = a + b;
    return c;
  }
}
var sonobb = new son();
console.log(sonobb.computer());
