/**
 * Created by damien on 12/29/15.
 */
var alt = require('../alt');
var LocationSource = require('../sources/LocationSource');

class LocationActions {
    updateLocations(locations) {
        return locations;
    }

    fetchLocations() {
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            LocationSource.fetch()
                .then((locations) => {
                    // we can access other actions within our action through `this.actions`
                    debugger;
                    this.updateLocations(locations);
                })
                .catch((errorMessage) => {
                    this.locationsFailed(errorMessage);
                });
        }
    }

    locationsFailed(errorMessage) {
        return errorMessage;
    }

    favoriteLocation(locationId) {
        this.dispatch(locationId);
    }
}

module.exports = alt.createActions(LocationActions);