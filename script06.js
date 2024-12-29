//set and get use

class computer {
  //set method
  set viewmore(value) {
    this.price = value;
  }
  //get method
  get viewvalue() {
    return this.price;
  }
}

var details = new computer();
// enter the parameter value
details.viewmore = 30;
console.log(details.viewvalue);
