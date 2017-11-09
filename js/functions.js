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
});
