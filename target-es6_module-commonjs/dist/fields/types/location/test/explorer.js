"use strict";
module.exports = {
    Field: require('../LocationField'),
    Filter: require('../LocationFilter'),
    readme: require('fs').readFileSync('./fields/types/location/Readme.md', 'utf8'),
    section: 'Text',
    spec: {
        label: 'Location',
        path: 'location',
        paths: {
            country: 'location.country',
            geo: 'location.geo',
            geo_lat: 'location.geo_lat',
            geo_lng: 'location.geo_lng',
            improve: 'location.improve',
            name: 'location.name',
            overwrite: 'location.overwrite',
            postcode: 'location.postcode',
            serialised: 'location.serialised',
            state: 'location.state',
            street1: 'location.street1',
            street2: 'location.street2',
            suburb: 'location.suburb',
        },
        value: {
            country: null,
            postcode: null,
            state: null,
            street1: null,
            suburb: null,
        },
    },
};
