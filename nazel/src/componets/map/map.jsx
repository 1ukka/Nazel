import { useEffect, useState } from "react";
import styles from './map.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Header } from "../header/header";

export const Map = () => {
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
    useEffect(() => {
      map.locate();

      return () => {
        map.off('locationfound');
        map.off('click');
      };
    }, [map]);
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
    
  }
  return (
    <div>
      <Header/>
      <div className={styles.mapheader}>The Map Shows Your Current Location</div>
      <div className={styles.mapcontent}>
        <div className={styles.search}></div>
      <div className={styles.MapContainer}>
        <MapContainer
          center={{ lat: 33.312805, lng: 44.361488 }}
          zoom={15}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>
      </div>
      
    </div>
  );
};
