'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map() {
    // Bangalore coordinates
    const bangaloreCenter: [number, number] = [12.9716, 77.5946];

    return (
        <div className="h-full w-full">
            <MapContainer
                center={bangaloreCenter}
                zoom={11}
                style={{ height: '100%', width: '100%' }}
                className="rounded-lg"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={bangaloreCenter}>
                    <Popup>
                        <div className="text-center">
                            <strong>Bengaluru</strong><br />
                            ನಮ್ಮ ಬೆಂಗಳೂರು!<br />
                            <em>Our Beautiful City</em>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}