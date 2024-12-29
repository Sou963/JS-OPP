//Object literal

let computer = {
  Name: "HP",
  Processor: "i5_8th_gen",
  Ram: "8th_GB",
  Rom: "SSD-Type_256GB",
  Core: "8th-Core",

  getname: () => {
    return('The name of the computer:' +computer.Name)
  },
};
//show
console.log(computer.getname());
console.log(computer.Processor)
console.log(computer.Ram)
console.log(computer.Rom)
console.log(computer.Core)
