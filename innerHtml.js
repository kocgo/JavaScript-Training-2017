/* textContent Method, read or set values of elements */
let myHeading = document.querySelector('.textCon');
myHeading.textContent = "This is a new heading";

let button = document.querySelector("#createbirb");

button.addEventListener('click', () => {
    myHeading.textContent = "Birb Created!";
})

/* innerHTML method, read or set values of html values */

button.addEventListener('click', () => {
    myHeading.innerHTML = "<h4>Birb Created!</h4>";
})

/* Getting The Values Of Elements */
let inputValue = document.querySelector("input").value;
