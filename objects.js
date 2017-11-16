/* Creating a basic object */
var person = {
  name : "Sarah",
  country : "US",
  age : 35
};

/* Calling,changing or adding a value */
person.name = "Jake";
console.log(person.name);

/* for-in loop for keys*/
for (var x in person) {
  console.log(x)
};

/* for-in loop for values*/
for (var x in person) {
  console.log(person[x])
};

/* Array of objects */
var questions = [
  { question: "how old are you?", answer: 28 },
  { question: "how old is he?", answer: 38 },
  { question: "how old is she?", answer: 18 }
]

/* Calling from array of objects */
console.log( questions[0] )
console.log( questions[0].question )
console.log( questions[0].answer )
