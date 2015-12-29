/**
 * Created by damien on 12/29/15.
 */
var React = require('react');
var LocationStore = require('../stores/LocationStore');
var LocationActions = require('../actions/LocationActions');

var Locations = React.createClass({
    getInitialState() {
        return LocationStore.getState();
    },

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    componentDidMount() {
        LocationStore.listen(this.onChange);

        LocationActions.fetchLocations();
    },

    render() {
        if (this.state.errorMessage) {
            return (
                <div>Something is wrong</div>
            );
        }

        if (!this.state.locations.length) {
            return (
                <div>
                    <img src="ajax-loader.gif" />
                </div>
            )
        }

        return (
            <ul>
                {this.state.locations.map((location) => {
                    return (
                        <li>{location.name}</li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = Locations;