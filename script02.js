//object constructor

function computer() {
  this.brand_name = "HP";
  this.model_name = "830-G5";
  this.processor = "i5-8^th Gen";
  this.ram = "8GB";
  this.rom = "256-SSD";

  this.getmodelname = () => {
    return "The computer model name is:-" + this.model_name;
  };
}

let computerinstance = new computer();
console.log(computerinstance.getmodelname());
console.log(computerinstance);
