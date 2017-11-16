const name = "gokhan"

/* Arrow Function Expression */
const sayName = () => {
  const message = "my name is " + name
  console.log(message);
}
sayName();


/* functions with single arguements does not require paranthesis */
const sayAge = age => {
  const message = 'I am ' + age + ' years old.'
  console.log(message);
}
sayAge(28);

/* One-Line functions */
const divide = (a,b) => a / b;
console.log(divide(100,2));
