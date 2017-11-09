$(document).ready(function() {
     $("#tooglesearchbox").click(function() {
          $("#searchbox").slideToggle(180, function() {
               $("#searchbox").css("display", "block");
          });
     });

     $("#searchboxclose").click(function() {
          $("#searchbox").slideToggle(180, function() {
               $("#searchbox").css("display", "none");
          });
     });

     if ($("#searchboxfield").attr("val") != "") {
          $("#searchresults").css("display", "block");
     }

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
          $("#searchbox-mobile").slideToggle(180, function() {
               $("#searchresults-mobile").css("display", "block");
               $("#searchbox-mobile").css("display", "block");
          });
     });

     $("#searchboxclose-mobile").click(function() {
          $("#searchbox-mobile").slideToggle(800, function() {
               $("#searchresults-mobile").css("display", "none");
               $("#searchbox-mobile").delay(500).css("display", "none");
          });
     });

     // mobile left side nav

     $("#toogleLeftSideNav").click(function() {
          $("#sitenav.mobile.left").css("left", "0");
     });

     $("#closeMobileLeftNav").click(function() {
          $("#sitenav.mobile.left").css("left", "-400px");
     });
});
