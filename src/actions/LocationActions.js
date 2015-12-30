/**
 * Created by damien on 12/29/15.
 */
var alt = require('../alt');
var LocationSource = require('../sources/LocationSource');

class LocationActions {
    updateLocations(locations) {
        this.dispatch(locations);
    }

    fetchLocations() {
        this.dispatch();
    }

    locationsFailed(errorMessage) {
        this.dispatch(errorMessage);
    }

    favoriteLocation(location) {
        this.dispatch(location);
    }
}

module.exports = alt.createActions(LocationActions);