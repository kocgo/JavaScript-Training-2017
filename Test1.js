function printList( list ) {
    var listHtml = 'Type of Birbs'+ "<ol>";
      for (i = 0; i < list.length; i += 1) {
        listHtml += '<li>' + list[i] + '</li>';
      }
    listHtml += "</ol>";
    document.write(listHtml);
}

var listofbirbs = ["Cockatiel","Budgie"];

printList(listofbirbs);
