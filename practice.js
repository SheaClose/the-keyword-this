//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //allows you refer to the object from within. Especially useful when large numbers of objects are going to be created, and the name is not known till created. prevents the need to manual input the actual objects name in each specific object.


  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // Explicit: In call(), apply(), and bind() you are providing the name of the obj within the parens explicitly providing it with the name of the obj to which it will refer, if an obj is not specified it will default to the window.
      // Implicit: In this case the object is not specified as part of the call, but it is located on the left side of the dot, providing implied context.
      //default: If explicit and implicit are not applied, it will default to the window (not good unless SPECIFICALLY called for, and I don't know in which situation would be, so I will avoid.)
      //New: This is a function that is used for object creation. When naming functions, capitol letters are used as the variable name to indicate this funciton is ONLY for object creation.
  // 3) What is the difference between call and apply?

      //call() triggers the function immediately, but requires the obj and arguements to be input manually. Apply(), similarly, triggers immediately, but the arguements are entered in the form of an array. These CAN be input manually in the form of an array, OR they can be given a variable name for an array.

  // 4) What does .bind do?

      //Answer bind saves the function call for another time, but depending on how and when it is called, the refferant object may have changed. bind allows you to attach the specific obj of your choosing to the function call, ensuring .this always refers to the correct obj.


//Next Problem


//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

  var user = {
    username: "Shea"
    , email: "Shea_Close"
    , getUsername: function() {
      return this.username;
    }
  };
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();


//Next Problem

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move += 10;
  }
}
// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
console.log(getYear.apply(prius));  //Code Here
console.log(getYear.call(mustang));



//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
