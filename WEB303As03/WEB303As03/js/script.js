//Web 303 Assignment
// Harvir Singh

// I used $.getJSON() to get the team.json
function getJSONData() {
    $.getJSON("team.json", function (data) {
        $("#team").empty();

        // After executuion
        $.each(data.team_members, function (index, member) {
            // For each and every object I insert name, position and bio. Also, follow ur instructions...)
            var nameElement = $("<h2>").text(member.name);
            var positionElement = $("<h5>").text(member.position);
            var bioElement = $("<p>").text(member.bio);

           
            $("#team").append(nameElement, positionElement, bioElement);
        });
    });
}

// I used $.ajax() for retrieving data
function ajaxRequest() {
    // Display the text "Loading..." in the #divteam
    $("#team").text("Loading...");

    // AJAX request
    $.ajax({
        type: "GET",
        url: "team.json",
        dataType: "json",
        beforeSend: function () {
            
            setTimeout(function () {
                // Display "Loading..." message
                $("#team").text("Loading...");
            }, 3000); // It  delays for 3 seconds as ur instruction 
            // hahahhhhaa!!!!! for gettinnn bonus
        },
        success: function (data) {
            
            $("#team").empty();

            // Loop through each team member object
            $.each(data.team_members, function (index, member) {
              
                var nameElement = $("<h2>").text(member.name);
                var positionElement = $("<h5>").text(member.position);
                var bioElement = $("<p>").text(member.bio);

                
                $("#team").append(nameElement, positionElement, bioElement);
            });
        },
        // Add error callback to display error message
        error: function () {
            // Display an error message if it fails 
            $("#team").text("Error: the content does not be retrievd.");
        }
    });
}

// Call one of the methods, in a ready function, to run the code and haviing the information
$(document).ready(function () {
    // You can choose anyy  method to call here:
     getJSONData(); 
    ajaxRequest(); 
});

