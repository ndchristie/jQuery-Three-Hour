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
/*
solution given is $('li:has(a)').nextAll().addClass('afterlink');
this is the equivalent of $('li:has(a) ~ *').addClass('afterlink');
both of these apply a green border to the first-level lists as well as the siblings of the anchor-containing item.
both of these will apply to any sibling elements; supplying "li" will make explicit.
*/
//Done

//Ass.:Challenge: Add the class tragedy to the closest ancestor (<ul>) of any .pdf link.
$('a[href*=".pdf"]').closest('ul').addClass('tragedy');
/*
an alternative solution given is $('a[href*=".pdf"]').parents('ul:first').addClass('tragedy');
this is not equivalent, insofar as it only returns the first in the tree, not the closest to the anchor.
*/
//Done