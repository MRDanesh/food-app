import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import {formatRelative} from 'date-fns';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 45.4972159,
    lng: -73.6103642
};

const shopLocation = {
    lat: 45.497212,
    lng: -73.610361
}

const GoogleMapItem = () => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
    });

    if (loadError) {
        return 'Error';
    }

    if (!isLoaded) {
        return 'Loading';
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
            >
                <Marker
                    position={shopLocation}
                >
                    <InfoWindow
                        position={{...shopLocation, lat:shopLocation.lat+0.005}}
                    >
                        <div>
                            ShopLocation
                        </div>
                    </InfoWindow>
                </Marker>
            </GoogleMap>
        </div>
    )

};

export default GoogleMapItem;