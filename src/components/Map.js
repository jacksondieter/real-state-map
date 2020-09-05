import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapComponent() {
    const accessToken = process.env.REACT_APP_API_KEY
    const mapData = {
        coordinates:[47.3836514,8.5482374],
        zoom:13,
        mapUrl:`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
        mapAtr:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

    }

    return (
        <Map center={mapData.coordinates} zoom={mapData.zoom} style={{width:'50%', marginLeft:'50%'}}>
            <TileLayer
                url={mapData.mapUrl}
                attribution={mapData.mapAtr}
            />
            <Marker position={mapData.coordinates}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    )
}
