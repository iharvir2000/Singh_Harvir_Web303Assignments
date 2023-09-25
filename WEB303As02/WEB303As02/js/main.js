// WEB303 Assignment 2

// Harvir Singh

$(document).ready(function() {
  // there are its solution links 
  $("#prospect").click(function(event) {
    event.preventDefault(); 
    animate("prospect.html"); 
  });

  $("#convert").click(function(event) {
    event.preventDefault(); // Prevent the default link behavior
    animate("convert.html"); // Animate content transition
  });

  $("#retain").click(function(event) {
    event.preventDefault(); 
    animate("retain.html"); 
  });

  // Function to animate content transition
  function animate(url) {
    var contentDiv = $("#content"); // Store a reference to the content div
    contentDiv.fadeOut(400, function() {
      // Animation is completed, load and display  the new content
      $.ajax({
        url: url,
        method: "GET",
        dataType: "html",
        success: function(data) {
          contentDiv.html(data).fadeIn(400); // Use the stored reference here........
        },
        error: function() {
          alert("Error loading content.");
        }
      });
    });
  }
});
