// ---------------------------------------------------------------
// Custom js for opendata.swiss handbook
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Stichwortverzeichnis
// ---------------------------------------------------------------
// generates a jump box A | D | M | for all letters that have
// terms depends on the headers in the begriffe page: Begriffe
// and subheader "Begriffe erklärt" if these headers change
// the ids below must be changed accordingly
// ---------------------------------------------------------------

$(document).ready(function(){
  var ogdchActivePage;
  ogdchActivePage = $('.custom-breadcrumbs ul li:nth-child(2) p').text();
  if (ogdchActivePage === 'Begriffe') {
     var jumpBox = "" +
         "<div class=\"ogdch-jumpbox\">\n";
     var startTermCollection = true;

     $('#was-ist-was-bei-open-data .section').each(function() {
       var letter = $(this).attr('id');
       if (!startTermCollection) {
           jumpBox += " | ";
       } else {
           startTermCollection = false;
       }
       jumpBox += "<a href=\"#" + letter + "\"><strong>" + letter.toUpperCase() + "</strong></a>\n";
     });
     jumpBox += "</div>";
     $('.ogdch-jumpbox').replaceWith(jumpBox);
  }
});