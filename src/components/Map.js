import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useStateValue } from '../State';

export default function MapComponent() {
    const [{ geoData }] = useStateValue();

    const buildings = geoData.map((point) => (
        {   coordinates:point.geometry.coordinates,
            type:point.properties.buildingType
        }
        ))
    const accessToken = process.env.REACT_APP_API_KEY
    const mapData = {
        coordinates:[47.3836514,8.5482374],
        zoom:13,
        mapUrl:`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
        mapAtr:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

    }

    return (
        <Map center={mapData.coordinates} zoom={mapData.zoom}>
            <TileLayer
                url={mapData.mapUrl}
                attribution={mapData.mapAtr}
            />
            {buildings.map(point =>(
                <Marker position={point.coordinates} id={point.coordinates[0]} style={point.style}>
                    <Popup>
                        {point.type}
                    </Popup>
                </Marker>
            ))}
        </Map>
    )
}
