/**
 * Created by damien on 12/29/15.
 */
var alt = require('../alt');
var LocationActions = require('../actions/LocationActions');

class FavoritesStore {
    constructor() {
        this.locations = [];

        this.bindListeners({
            addFavoriteLocation: LocationActions.FAVORITE_LOCATION
        });
    }

    addFavoriteLocation(location) {
        this.locations.push(location);
    }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');