var myList = [1,4,6,7,23]
var x = 0

/* Using a for loop with an array */
for (var i = 0; i < myList.length; i += 1) {
  console.log(myList[i]);
}

/* Joining Items in a list */
var joinedList = myList.join("-");
console.log(joinedList);

/* Concating two lists */
var secondList = ["name1",'name2','name3']
var allLists = myList.concat(secondList);
console.log(allLists);

/* Searching for index in a list, if it doesnt exist it will return value of '-1' */
var position = secondList.indexOf("name2");
console.log(position);

/* basic while loop */
while (true) {
  break
}

/* do loop */
do {
  console.log("emk");
  x += 1
} while (x < 3);
