// Selecting elements
$('li');

// Descendant selector
$("p a");

// Classes and isDisabled
$('#myID');
$(".myClass");

// Attiribute selector
$([name='newsletter']);

// Filtering selectors
// https://api.jquery.com/category/traversing/filtering/

// Creating A List Item , Appending to a list with a fade in
$('#list-button').click( (newItem) => {
  newItem = "<li>" + $("input").val() + "</li>";
  $(newItem).hide().appendTo("ul").fadeIn("slow");
});

// Removing Last Item From the list with a fade out
$('#remove-button').click( () => {
  $('ul li:last-child').fadeOut("slow", () => {
    $('ul li:last-child').detach();
  });
});

// setInterval call a repetetive function with a delay for each call
$("h1").hide();
window.setInterval( () => {
  $("h1").fadeIn("slow", () => {
    $("h1").fadeOut("slow", () => {
    });
  });
},100);

// Usage of OnClick
document.getElementById('on-click').onclick = () => {
  alert("You Clicked!");
};

// jQuery on methods
$("#on-click").on("click", (e) => {
  console.log(e);
});

// Mouse Hovering, first parameter is for mouse hover on, second is for hover off
$(".hover").hover( (e) => {
  e.target.textContent = e.target.textContent.toUpperCase();
}, (e) => {
  e.target.textContent = e.target.textContent.toLowerCase();
});
