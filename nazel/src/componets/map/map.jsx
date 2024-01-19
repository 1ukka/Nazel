import { useState } from "react";
import styles from './map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = () => {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  return (
    <div className={styles.MapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </div>
  );
};
