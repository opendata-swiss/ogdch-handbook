// ---------------------------------------------------------------
// Custom js for opendata.swiss handbook
// ---------------------------------------------------------------

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
// Exchange logo on french translations in the footer
// ---------------------------------------------------------------
$(document).ready(function(){
  var currentURL = window.location.href;
  var frenchLangCode = 'fr';
  if (currentURL.split('/').includes(frenchLangCode)) {
    var tfLogo = $('.logo-tf');
    var urlLogoTf = tfLogo.attr('src');
    var urlSegments = urlLogoTf.split('/');
    var urlLogoTfLocale = urlSegments.slice(0, -1).join('/') + '/logo-tf-egovernment.' + frenchLangCode + '.png';
    tfLogo.attr('src', urlLogoTfLocale);
    tfLogo.attr('alt', 'logo reposnsable thématique e-government');
  }
});

// ---------------------------------------------------------------
// Language Switcher
// ---------------------------------------------------------------
$(document).ready(function(){
  var currentURL = window.location.href;
  var frenchLangCode = 'fr';
  var germanlangCode = 'de';
  if (currentURL.split('/').includes(frenchLangCode)) {
    activelangCode = frenchLangCode;
    switchLangCode = germanlangCode;
  } else {
    activelangCode = germanlangCode;
    switchLangCode = frenchLangCode;
  }
  var activelangSwitcher = $('.lang_' + switchLangCode);
  var currentlangSwitcher = $('.lang_' + activelangCode);
  if (currentURL.split('/').includes(activelangCode)) {
    localizedUrl = currentURL.replace(activelangCode, switchLangCode);
  } else {
    var currentUrlParts = currentURL.split('/');
    currentUrlParts.splice(3, 0, switchLangCode);
    localizedUrl = currentUrlParts.join('/');
  }
  activelangSwitcher.attr('href', localizedUrl);
  currentlangSwitcher.addClass('active');
});
