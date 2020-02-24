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

// This takes from the custom-breadcrumbs directive which chapter is currently active
// For this to work: chapters that are in the sidebar must have unique names

$(document).ready(function(){
  var ogdchActiveBreadcrumb;
  var ogdchActiveText;
  ogdchActiveBreadcrumb = $('.custom-breadcrumbs ul li:nth-child(3) a.internal').attr('href');
  ogdchActiveText = $('.custom-breadcrumbs ul li:nth-child(4) p').text();

  $('.wy-menu-vertical ul li a.internal').each(function () {
    if ($(this).attr('href') === ogdchActiveBreadcrumb) {
      $(this).addClass("current custom-breadcrumb-upper");
      $(this).parent().addClass("current");
      $(this).parent().append("<ul class='custom-breadcrumb-sub'><li class='custom-breadcrumb-sub'>" + ogdchActiveText+ "</li></ul>");
    }
  });
});

// Attribute definitions toggle

$(document).ready(function(){
  var attributeHeader = $('.attribute');
  attributeHeader.each(function() {
      $(this).children('dl').hide();
      $(this).children('div').hide();
      $(this).click(showDefinition);
      function showDefinition(event) {
          $(this).children('dl').toggle();
          $(this).children('div').toggle();
      }
  });
});
