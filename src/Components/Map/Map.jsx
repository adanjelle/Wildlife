import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  const position = [-0.4567, 39.6405]; // Updated coordinates for Garissa town
  
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={10} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Garissa, Kenya. <br />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png" alt="Kenyan Flag" width="100" />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
