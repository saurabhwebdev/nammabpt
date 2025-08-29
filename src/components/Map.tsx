'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    useEffect(() => {
        // Fix for default markers in react-leaflet
        delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);
    // Bangalore coordinates and key locations
    const bangaloreCenter: [number, number] = [12.9716, 77.5946];
    
    // Sample locations for demonstration
    const keyLocations = [
        {
            position: [12.9716, 77.5946] as [number, number],
            name: "Bengaluru City Center",
            description: "ನಮ್ಮ ಬೆಂಗಳೂರು! • Our Beautiful City",
            isMain: true
        },
        {
            position: [12.9698, 77.7500] as [number, number],
            name: "Whitefield",
            description: "Tech Hub • Coming Soon",
            isMain: false
        },
        {
            position: [12.9279, 77.6271] as [number, number],
            name: "Koramangala",
            description: "Startup District • Coming Soon",
            isMain: false
        },
        {
            position: [13.0358, 77.5970] as [number, number],
            name: "Hebbal",
            description: "North Bengaluru • Coming Soon",
            isMain: false
        }
    ];

    return (
        <div className="h-full w-full relative">
            <MapContainer
                center={bangaloreCenter}
                zoom={11}
                style={{ height: '100%', width: '100%' }}
                className="rounded-lg"
                scrollWheelZoom={true}
                zoomControl={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* Coverage area circle */}
                <Circle
                    center={bangaloreCenter}
                    radius={25000}
                    pathOptions={{
                        color: '#8b5cf6',
                        fillColor: '#8b5cf6',
                        fillOpacity: 0.1,
                        weight: 2,
                        opacity: 0.6
                    }}
                />

                {/* Location markers */}
                {keyLocations.map((location, index) => (
                    <Marker 
                        key={index}
                        position={location.position}
                    >
                        <Popup>
                            <div className="text-center p-3 min-w-[200px]">
                                <div className={`font-bold mb-2 ${location.isMain ? 'text-purple-700 text-lg' : 'text-gray-700'}`}>
                                    {location.isMain ? '🏛️ ' : '📍 '}{location.name}
                                </div>
                                <div className="text-sm text-gray-600 mb-3">
                                    {location.description}
                                </div>
                                {!location.isMain && (
                                    <div className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full inline-block">
                                        🚀 Report issues here soon!
                                    </div>
                                )}
                                {location.isMain && (
                                    <div className="space-y-2">
                                        <div className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full inline-block">
                                            🏠 City Center
                                        </div>
                                        <div className="text-xs text-purple-600 font-medium">
                                            ✨ Main Hub for Fretso
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            
            {/* Map controls overlay */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border">
                <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <span className="w-3 h-3 bg-purple-500 rounded-full opacity-60"></span>
                    <span>Coverage Area</span>
                </div>
            </div>
        </div>
    );
}