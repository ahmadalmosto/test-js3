1. In the project there was a house that did not have a lord. Which house was this? And what did you do to deal with this situation?

House Stark of Winterfell

When I fetch all the houses and received the data I checked if there is currentLord , if there is i fetch for it and then append it to the dom , if not i did fetch and append none instead



2. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
(_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)

I used fetch API for many reasons :
first : fetch api is a native javascript and it always good not to use third party library in case we have a native solution because libraries may add more complexity to the code .
secode : The Fetch API makes it easier than XMLHttpRequest to make asynchronous requests and handle responses. 


3. Let's say you were a huge fan of Object Oriented Programming and the api offered the option to get all the data you needed at once. What classes would you make and what functions would they have?
(_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
(_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
(_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

Example (taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

/// this is a getter function to return the area once it called
  get area() {
    // get the area of the rectangle
    /// return the area of the rectangle 
    return this.calcArea();
  }

  calcArea() {
    // calculate the area of the rectangle
    here i can calculate the area using this keyword to refer to the current object and then accect its variables
    return this.height * this.width;
  }
}

```

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

/// this is a getter function to return the age once it called
  get age() {
    return this.age;
  }

//// this is a setter function to set the attribute of the age
  set age(newAge) {
    this.age = newAge;
  }

  /// this is a getter function to return the name once it called
  get name() {
    return this.name;
  }

//// this is a setter function to set the attribute of the name
  set name(newName) {
    this.name = newName;
  }

}

const student = new Student("Ahmed", 30);
student.name();
student.age();
student.name("woter");
student.age(55);


