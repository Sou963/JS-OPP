//static key works

class computer {
  static model_name = "Hp-elite_book-G5";
  static processor = "i5";
  static ram = "8GB";

  static computer_function() {
    return "this is the:-" + this.model_name;
  }
}
console.log(computer.computer_function());
console.log(computer.processor);
console.log(computer.ram);
