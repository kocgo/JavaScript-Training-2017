/* Document Element Object */

/* Getting an element by id*/
document.getElementById("firstbird").style.color = "purple";

/* Setting Background Color */
document.getElementById("firstbird").style.backgroundColor = "orange"

/* Event Listener, first arguement on Action , second arguement the function*/
const birdListener = document.getElementById('birdlisten');
birdListener.addEventListener('click',() => {
  birdListener.style.color = 'red';
});

const myButton = document.getElementById('myButton');
myButton.addEventListener('click',() => {
  birdListener.style.color = 'red';
});

/* Getting Elements By Tag Name, returns an array */
const myParagraphs = document.getElementsByTagName("p");
const paragraphs = document.getElementById("paragraphs");
paragraphs.innerHTML = "<p>There are "  + myParagraphs.length + " paragraphs in this page.</p>";

/* Getting Elements By Class Name, returns an array */
const error_not_purple = document.getElemetsByClassName("error_not_purple");

/* Query Selectors */
/* Selector gets the first matching element */
document.querySelector('li');

/* Selector all gets the all matching elements as an array*/
/* for tags*/
document.querySelectorAll("li");

/* for ID */
document.querySelectorAll("#li");

/* for Class */
document.querySelectorAll(".li");

/* for Attiributes , for example "title" */
document.querySelectorAll("[title=label]");

/* inside of an other element, for ex links in a "nav" element */
document.querySelectorAll("nav a");
