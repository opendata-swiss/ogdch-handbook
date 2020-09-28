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

// ---------------------------------------------------------------
// Show active chapter in sidebar even on subpages
// ---------------------------------------------------------------
// This takes from the custom-breadcrumbs directive which chapter is currently active
// For this to work: chapters that are in the sidebar must have unique names
// ---------------------------------------------------------------
$(document).ready(function(){
  var ogdchActiveBreadcrumb;
  var ogdchActiveText;
  var crumb3rd = $('.custom-breadcrumbs ul li:nth-child(3) a.internal').attr('href');
  var crumb2nd = $('.custom-breadcrumbs ul li:nth-child(2) a.internal').attr('href');
  if (crumb3rd) {
      ogdchActiveBreadcrumb = crumb3rd;
      ogdchActiveText = $('.custom-breadcrumbs ul li:nth-child(4) p').text();
  } else if (crumb2nd) {
      ogdchActiveBreadcrumb = crumb2nd;
      ogdchActiveText = $('.custom-breadcrumbs ul li:nth-child(3) p').text();
  }
  $('.wy-menu-vertical ul li a.internal').each(function () {
    if ($(this).attr('href') === ogdchActiveBreadcrumb) {
      $(this).addClass("current custom-breadcrumb-upper");
      $(this).parent().addClass("current");
      $(this).parent().append("<ul class='custom-breadcrumb-sub'>" +
          "<li class='custom-breadcrumb-sub'>" + ogdchActiveText + "</li></ul>");
    }
  });
});

// ---------------------------------------------------------------
// Toggle container attribute
// ---------------------------------------------------------------
// toggle so that attribute definitions are not shown
// initially but can be revealed on demand
// ---------------------------------------------------------------
$(document).ready(function(){
  var attributeHeader = $('.attribute p');
  attributeHeader.each(function() {
      $(this).nextAll().hide();
      $(this).click(function (event) {
          $(this).nextAll().toggle();
      });
  });
});

// ---------------------------------------------------------------
// Exchange logo on french translations in the footer
// ---------------------------------------------------------------
$(document).ready(function(){
    var urlLogoTf = $('.logo-tf').attr('src');
    var urlSegments = urlLogoTf.split('/');
    var urlLogoTfFr = urlSegments.slice(0, -1).join('/') + '/logo-tf-egovernment.fr.png';
    $('.logo-tf').attr('src', urlLogoTfFr);
});
