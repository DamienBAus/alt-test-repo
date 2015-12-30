/**
 * Created by damien on 12/29/15.
 */
var LocationActions = require('../actions/LocationActions');

var mockData = [
    { id: 0, name: 'Abu Dhabi' },
    { id: 1, name: 'Berlin' },
    { id: 2, name: 'Bogota' },
    { id: 3, name: 'Buenos Aires' },
    { id: 4, name: 'Cairo' },
    { id: 5, name: 'Chicago' },
    { id: 6, name: 'Lima' },
    { id: 7, name: 'London' },
    { id: 8, name: 'Miami' },
    { id: 9, name: 'Moscow' },
    { id: 10, name: 'Mumbai' },
    { id: 11, name: 'Paris' },
    { id: 12, name: 'San Francisco' }
];

var LocationSource = {
    fetchLocations() {
        console.log("Test 3");
        return {
            remote() {
                console.log("Test 4");
                return new Promise(function (resolve, reject) {
                    // simulate an asynchronous flow where data is fetched on
                    // a remote server somewhere.
                    console.log("Test 1");
                    setTimeout(function () {

                        console.log("Test 2");
                        // change this to `false` to see the error action being handled.
                        if (true) {
                            // resolve with some mock data
                            resolve(mockData);
                        } else {
                            reject('Things have broken');
                        }
                    }, 250);
                });
            },

            local() {
                // Never check locally, always fetch remotely.
                console.log("Test local");
                return null;
            },

            success: LocationActions.updateLocations,
            error: LocationActions.locationsFailed,
            loading: LocationActions.fetchLocations
        }
    }
};

module.exports = LocationSource;
