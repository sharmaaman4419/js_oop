/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
 console.log(vicky.name);  -> Logs 'Vicky'
 console.log(vicky.age);  -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
// /********* Uncomment this line to test your work! *********/

var personStore = {
	greet() {alert("hello")}
};
 var personStore = Object.create(personStore);

personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let object = Object.create(personStore);
  object.name = name;
  object.age = age;
  return object;
}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
 console.log(sandra.name); // -> Logs 'Sandra'
 console.log(sandra.age); //-> Logs 26
 sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

var personStore = {
  introduce() {alert("hi,my name is sandra")}
};

function personFromPersonStore(name, age) {
  let object = Object.create(personStore);
  object.name = name;
  object.age = age;
  return object;
}

var sandra = personFromPersonStore("sandra",26);

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
	this.greet = function greet() {
    alert("hello")
  }
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function PersonFromConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function greet() {
    alert("hello")
  }
}

var mike =  new PersonFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
 console.log(mike.name); // -> Logs 'Mike'
 console.log(mike.age); //-> Logs 30
 mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here
function PersonFromConstructor(name, age) {
  this.name = name;
  this.age = age;
    this.introduce = function introduce() {
      alert("Hi,my name is mike");
    }
  }

var mike =  new PersonFromConstructor('Mike', 30);


 mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor() {

	}
greet() { 
  alert("hello");
}

}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

// add code here

class DeveloperClass { 
  constructor(name,age) { 
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(Hello,World,my name is thai);
  }
}

// /********* Uncomment these lines to test your work! *********/
 var thai = new DeveloperClass('Thai', 32);
 console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore /* Put code here */ ;

function adminFactory(name, score) {
  // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
