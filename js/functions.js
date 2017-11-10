$(document).ready(function() {

     // dekstop searchbox

     $("#tooglesearchbox").click(function() {
          $("#searchbox").slideDown(300);
          $("#searchresults").delay(350).slideDown(200);
     });

     $("#searchboxclose").click(function() {
          $("#searchbox").slideUp(300);
          $("#searchresults").delay(350).slideUp(200);
     });

     // mobile new post modal

     $("#toogleMobileNewPost").click(function() {
          $("#mobileNewPostModal").slideToggle(800, function() {
               $("#mobileNewPostModal").css("display", "block");
          });
     });

     $("#closeMobileNewPost").click(function() {
          $("#mobileNewPostModal").slideToggle(800, function() {
               $("#mobileNewPostModal").css("display", "none");
          });
     });

     // mobile searchbox

     $("#tooglesearchbox-mobile").click(function() {
          $("#searchbox-mobile").slideDown(300);
          $("#searchresults-mobile").delay(350).slideDown(200);
     });

     $("#searchboxclose-mobile").click(function() {
          $("#searchresults-mobile").slideUp(800);
          $("#searchbox-mobile").delay(800).slideUp(800);
     });

     // mobile left side nav

     $("#toogleLeftSideNav").click(function() {
          $("#sitenav.mobile.left").css("left", "0");
     });

     $("#closeMobileLeftNav").click(function() {
          $("#sitenav.mobile.left").css("left", "-400px");
     });

     // mobile searchbox & close left sidenab

     $("#tooglesearchbox-mobile2").click(function() {
          $("#sitenav.mobile.left").css("left", "-400px");
          $("#searchbox-mobile").slideDown(300);
          $("#searchresults-mobile").delay(350).slideDown(200);
     });

     // dekstop nav user dropdown menu

     $("#toogleUserNavDropdown").click(function() {
          $("#nav-dropdown-user").slideToggle(250);
     });


});
