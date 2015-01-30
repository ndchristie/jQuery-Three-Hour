/* 02.js */

//Ass.:Download the starter code files here.
//console.log($);
//Done

//Ass.:Add a class of special to all of the <li> elements at the second level of the nested list.
$('#selected-plays > li > ul > li').addClass('special');
//Done

//Ass.:Add a class of year to all of the table cells in the third column of a table.
//Ass.:Hint: Take a look at how many columns are in each table.
$('td:nth-of-type(3)').addClass('year');
//Done

//Ass.:Add the class of special to the first table row that has the word Tragedy in it.
$('tr:contains("Tragedy"):first').addClass('special');
//Done

//Ass.:Challenge: Select all of the list items (<li>) containing a link (<a>). Add the class afterlink to the sibling list items that follow the ones selected.
$('a').closest('li').nextAll('li').addClass('afterlink');
//Done

//Ass.:Challenge: Add the class tragedy to the closest ancestor (<ul>) of any .pdf link.
$('a[href*=".pdf"]').closest('ul').addClass('tragedy');
//Done