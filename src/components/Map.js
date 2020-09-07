import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import mapData from '../utils/props'
import { useStateValue } from '../State';

const MapComponent = () => {
    const [{ geoData }] = useStateValue();

    return (
        <Map center={mapData.coordinates} zoom={mapData.zoom}>
            <TileLayer
                url={mapData.mapUrl}
                attribution={mapData.mapAtr}
            />
            {geoData.map(point =>(
                <Marker position={point.geometry.coordinates} id={point.geometry.coordinates[0]}>
                    <Popup>
                        {point.properties.buildingType} <br /> <span>Price: {point.properties.price} </span> 
                    </Popup>
                </Marker>
            ))}
        </Map>
    )
}

export default MapComponent