function getUserCountry() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const geocoder = new google.maps.Geocoder();
                    const latLng = new google.maps.LatLng(latitude, longitude);

                    geocoder.geocode({ latLng }, (results, status) => {
                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                const country = results[0].address_components.find(
                                    (component) =>
                                        component.types.includes("country") &&
                                        component.types.length === 1
                                );
                                if (country) {
                                    resolve(country.short_name);
                                } else {
                                    reject("Country not found");
                                }
                            } else {
                                reject("No results found");
                            }
                        } else {
                            reject("Geocoder failed due to: " + status);
                        }
                    });
                },
                (error) => {
                    reject("Geolocation failed due to: " + error.message);
                }
            );
        } else {
            reject("Geolocation is not supported by this browser");
        }
    });
}

getUserCountry()
    .then((country) => {
        console.log("User's country:", country);
        const currentDate = new Date();
        console.log("Current date:", currentDate);

        const pastDate = new Date(currentDate.getTime() - (365 * 24 * 60 * 60 * 1000));
        console.log("Past date:", pastDate);
    })
    .catch((error) => {
        console.error("Error:", error);
});

// Exporting the currentDate variable
export const currentDate = new Date();

// Exporting the pastDate variable
export const pastDate = new Date(currentDate.getTime() - (365 * 24 * 60 * 60 * 1000));