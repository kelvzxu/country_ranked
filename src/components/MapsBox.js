// src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Import React-Leaflet components
import L from 'leaflet'; // Import Leaflet untuk custom icon

const MapComponent = ({ latlng, countryName, mapsHeight, mapsWidth }) => {
  // Jika latlng tidak diberikan atau tidak valid, tidak merender peta
  if (!latlng || latlng.length !== 2) {
    return <p>No map data available.</p>;
  }

  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={latlng}
      zoom={6}
      style={{
        height: mapsHeight || '250px',  // Default 250px jika tidak diberikan
        width: mapsWidth || '100%',      // Default 100% jika tidak diberikan
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={latlng} icon={customIcon}>
        <Popup>{countryName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
