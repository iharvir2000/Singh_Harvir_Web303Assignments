/*
    Assignment #4
    {Harvir Singh}
*/


$(function () {
    // Check if geolocation is available
    if ("geolocation" in navigator) {
        // Get the current location
        navigator.geolocation.getCurrentPosition(function (position) {
            // Extract latitude, longitude, and accuracy from the position object
            const currentLatitude = position.coords.latitude;
            const currentLongitude = position.coords.longitude;
            const currentAccuracy = position.coords.accuracy;

            // Display current location information
            $("#locationhere").text(`Current Location: Latitude ${currentLatitude}, Longitude ${currentLongitude}, Accuracy ${currentAccuracy} meters`);

            // Check if a previous location is stored in local storage
            const storedLocation = JSON.parse(localStorage.getItem("userLocation"));

            if (storedLocation) {
                // Calculate the distance traveled between the current and stored locations
                const distance = calculateDistance(
                    storedLocation.latitude,
                    storedLocation.longitude,
                    currentLatitude,
                    currentLongitude
                );

                // Display a welcome back message
                $("h1#welcomeMessage").text("Welcome back to the page!");

                // Display the traveled distance in kilometers
                const distanceKm = (distance / 1000).toFixed(2); // Convert meters to kilometers
                $("h2#distanceMessage").text(`You traveled ${distanceKm} km since your last visit.`);

            } else {
                // Display a welcome message for first-time users
                $("h1#welcomeMessage").text("Welcome to the page for the first time!");
            }

            // Store the current location in local storage
            const currentLocation = {
                latitude: currentLatitude,
                longitude: currentLongitude,
            };
            localStorage.setItem("userLocation", JSON.stringify(currentLocation));
        }, function (error) {
            console.error("Error getting user's location:", error);
        });
    } else {
        // Geolocation is not available
        $("body").html("<h1>Error: Geolocation is not supported in this browser.</h1>");
    }

    // Function to calculate the distance between two latitude/longitude points on Earth
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const earthRadius = 6371000; // Radius of the Earth in meters
        const toRadians = function (num) {
            return (num * Math.PI) / 180;
        };

        const φ1 = toRadians(lat1);
        const φ2 = toRadians(lat2);
        const Δφ = toRadians(lat2 - lat1);
        const Δλ = toRadians(lon2 - lon1);

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c; // Distance in meters
    }
});
