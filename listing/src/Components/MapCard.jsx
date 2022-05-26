import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../style/MapCard.css';
import * as turf from '@turf/turf';

function MapCard(props) {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lsdHIiLCJhIjoiY2wzbjNtYzJiMGFycTNwbDJwejZxaGNlaCJ9.C2FAT9AAWYSNC01AEEymIw';

    //32.08561307536034, 34.78184268367215

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(34.78184268367215);
    const [lat, setLat] = useState(32.08561307536034);
    const [zoom, setZoom] = useState(9);

    //Render map
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });



        var center = turf.point([lng, lat]);
        var radius = 0.1;
        var options = {
            steps: 80,
            units: 'kilometers'
        };

        var circle = turf.circle(center, radius, options);

        map.current.on('click', (e) => {
            setLng(e.lngLat.lng);
            setLat(e.lngLat.lat);
            map.current.flyTo({
                center: [e.lngLat.lng, e.lngLat.lat]
            })
            map.current.removeLayer('circle-outline');
            map.current.removeSource('circle-outline');
            center = turf.point([e.lngLat.lng, e.lngLat.lat]);
            circle = turf.circle(center, radius, options)
            map.current.addLayer({
                'id': 'circle-outline',
                'type': 'line',
                'source': {
                    'type': 'geojson',
                    'data': circle
                },
                'paint': {
                    'line-color': 'blue',
                    "line-opacity": 0.5,
                    "line-width": 5,
                    "line-offset": 5
                },
                'layout': {

                }
            });
        });

        map.current.on('load', () => {
            map.current.addLayer({
                'id': 'circle-outline',
                'type': 'line',
                'source': {
                    'type': 'geojson',
                    'data': circle
                },
                'paint': {
                    'line-color': 'blue',
                    "line-opacity": 0.5,
                    "line-width": 5,
                    "line-offset": 5
                },
                'layout': {

                }
            });
        });
    });

    //On map move
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    const handleLat = (e) => {
        setLat(e.target.value);
    }

    const handleLng = (e) => {
        setLng(e.target.value);
    }

    const handleClick = () => {

        var center = turf.point([lng, lat]);
        var radius = 0.1;
        var options = {
            steps: 80,
            units: 'kilometers'
        };

        var circle = turf.circle(center, radius, options);

        map.current.flyTo({
            essential: true,
            center: [lng, lat]
        });
        map.current.removeLayer('circle-outline');
        map.current.removeSource('circle-outline');
        center = turf.point([lng, lat]);
        circle = turf.circle(center, radius, options)
        map.current.addLayer({
            'id': 'circle-outline',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': circle
            },
            'paint': {
                'line-color': 'blue',
                "line-opacity": 0.5,
                "line-width": 5,
                "line-offset": 5
            },
            'layout': {

            }
        });
    }

    return (
        <div className='map-div'>
            <h2>Search for an address:</h2>
            <div className='input-div'>
                <TextField
                    sx={{
                        width: '40%',
                        margin: '0 5%'
                    }}
                    value={lat}
                    onChange={handleLat}
                    id="lat" label="Lat." variant="outlined" />
                <TextField
                    sx={{
                        width: '40%',
                        margin: '0 5%'
                    }}
                    value={lng}
                    onChange={handleLng}
                    id="lng" label="Lng." variant="outlined" />
                <Button variant="outlined"
                    sx={{
                        width: '90%',
                        left: '5%',
                        margin: '0.5rem 0'
                    }}
                    onClick={handleClick}
                >Go to Coordinates</Button>
            </div>
            <Box className='map-container' ref={mapContainer}
                sx={{
                    height: '72%',
                    width: '100%'
                }}
            >
            </Box>
        </div>
    );
}

export default MapCard;