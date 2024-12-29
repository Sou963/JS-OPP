//object instance

let computer = Object();
computer.name = "Hp";
computer.model = "830-G5";
computer.processor = "i5_8^th-gen";
computer.ram = "8-GB";
computer.rom = "256-SSD";

computer.getmodelname = () => {
  return "The model name is :"+computer.model;
};
//show
console.log(computer.name);
console.log(computer.getmodelname());
console.log(computer.processor);
console.log(computer.ram);
console.log(computer.rom);
