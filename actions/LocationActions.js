/**
 * Created by damien on 12/29/15.
 */
var alt = require('../alt');

class LocationActions {
    updateLocations(locations) {
        return locations;
    }
}

module.exports = alt.createActions(LocationActions);