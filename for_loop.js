function printList( list ) {
    var listHtml = 'Type of Birbs'+ "<ol>";
      for (i = 0; i < list.length; i += 1) {
        listHtml += '<li>' + list[i] + '</li>';
      }
    listHtml += "</ol>";
    document.write(listHtml);
}

var listofbirbs = ["Cockatiel","Budgie","Macaw"];

printList(listofbirbs);

/* For Each Method for Arrays*/
arr.forEach(function(element))


/* For Of Loop , applies the function for each element in the array */
for (x of arr) {
  console.log(x);
}
