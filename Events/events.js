function say(something) {
  alert(something);
}

function exec(func, arg) {
  func(arg);
}

/* Delay in an execution with setTimeout() , second arguement is
miliseconds , third arguement is for function*/
document.getElementById("delayed-message").addEventListener('click', () => {
  window.setTimeout(say, 3000, '3 seconds of delay');
})

/* Capitalizing Paragraph With Mouse Over */
myParagraph = document.querySelector("p");
myParagraph.addEventListener("mouseover", () => {
  myParagraph.textContent = myParagraph.textContent.toUpperCase();
});

/* De-Capitalizing Paragraph With Mouse Out */
myParagraph.addEventListener("mouseout", () => {
  myParagraph.textContent = myParagraph.textContent.toLowerCase();
});

/* Event Object to affect the child elements */
myList = document.querySelector("ul");

myList.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
  event.target.textContent = event.target.textContent.toUpperCase();
  }
});
myList.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
  event.target.textContent = event.target.textContent.toLowerCase();
  }
});

// parentNode
myList.parentNode;

//  Previous Element Sibling
myParagraph.previousElementSibling;

// insertBefore
myParagraph.insertBefore(newNode, referenceNode)

// nextElementSibling
elementNodeReference.nextElementSibling;

// Getting Children elements
node.children;

// first and last child
ParentNode.firstElementChild;
ParentNode.lastElementChild;
