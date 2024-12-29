//Encapsulation using classes

class create_counter {
  #count = 0;

  increment() {
    this.#count++;
  }
  decrement() {
    this.#count--;
  }
  get_counter() {
    return this.#count;
  }
}

var obj = new create_counter();
obj.increment(); //1
obj.increment(); //2
obj.increment(); //3
obj.increment(); //4
obj.increment(); //5
obj.decrement(); //4
obj.decrement(); //3
obj.decrement(); //2
console.log(obj.get_counter());
