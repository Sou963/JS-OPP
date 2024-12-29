//inharitance

class father {
  computer_model_name = "Hp-G5";
  processor = "i5";
  Ram = "8GB";
  computer() {
    var nam = this.computer_model_name;
    var cpu = this.processor;
    var ram = this.Ram;
    console.log(nam);
    console.log(cpu);
    console.log(ram);
  }
}

class son extends father {
  
}

var value_son = new son();
console.log(value_son.computer());
