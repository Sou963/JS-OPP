//use of static keyword

class father {
 static computer() {
    var name ="Hp Elite book";
    return name;
  }
}

class son extends father {
  static son_computer() {
    var name = "Hp Elite book G9";
    return name;
  }
}
//console.log(father.computer());
console.log(son.computer());
console.log(son.son_computer());
