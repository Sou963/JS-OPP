//class to object

class computer {
  Brand_Name = "HP";
  Model_Name = "830-G5";
  Color = "White";
  Processor = "i5-8^th Gen";
  Ram = "8-GB";
  Rom = "256-SSD";

  get_model_name() {
    return "The model name is:-" + this.Model_Name;
  }
}
//class to object
let class_to_object = new computer();
console.log(class_to_object.get_model_name());
console.log(class_to_object.Processor);
console.log(class_to_object.Ram);
console.log(class_to_object.Rom);
