/* Styling an Element */

/* changing P element color to blue */
document.querySelector("p").style.color = "blue";

/* To hide an class */
document.querySelector(".class-here").style.display = 'none';

/* Style Page MDN */
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

/* Creating An Element*/
let listItem = document.createElement('li');

/* Setting the className of the Element created */
listItem.className = "newClass";

/* Adding The Created Element to Parent Element */
parentElement.appendChild(li);

/* Removing Elements */
parentElement.removeChild(li);
