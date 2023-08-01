class MyClass {
    // Constructor method is used to initialize the object's properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method definition
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  class Student extends MyClass {
    constructor(name, age, grade) {
      super(name, age); // Call the constructor of the parent class
      this.grade = grade;
    }
  
    displayGrade() {
      console.log(`My grade is ${this.grade}.`);
    }
  }

  
  const student1 = new Student("John", 18, "A");
student1.greet(); // Output: Hello, my name is John and I am 18 years old.
student1.displayGrade(); // Output: My grade is A.
