import { useEffect, useState } from "react";
import styles from "./map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline ,
  useMapEvents,
} from "react-leaflet";
import { Header } from "../header/header";

export const Map = () => {
  const [animateRef, setAnimateRef] = useState(false);

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        if (e.originalEvent.detail === 1) {
          map.setView(e.latlng, map.getZoom(15), {
            animate: animateRef.current || false,
          });
        }
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom(15));
      },
    });

    useEffect(() => {
      map.locate();

      return () => {
        map.off("locationfound");
        map.off("click");
      };
    }, [map]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  const addVectorLayer = () => {
    const polylineCoordinates = [
      [33.33644994166809, 44.400345692721565],
      [33.333892513925385, 44.39773444570118],
      [33.32995084128615, 44.39238183506308],
      [33.329005684044816, 44.393816735236356],
      [33.32616133032055, 44.38806784396837],
      [33.329926395152526, 44.392364176379495],
    ];

    return (
      <Polyline
        pathOptions={{ color: "#363F57" }}
        positions={polylineCoordinates}
      />
    );
  };

  const handleReset = () => {
    setAnimateRef(true);
    setTimeout(() => {
      setAnimateRef(false);
    }, 500);
  };

  return (
    <div className={styles.bgimg}>
      <div className={styles.blurimg}>
      <Header />
      <div className={styles.mapheader}>
        The Map Shows Your Current Location
      </div>
      <div className={styles.mapcontent}>
        <div className={styles.search}></div>
      </div>
      <div className={styles.MapContainer}>
        <MapContainer
          center={{ lat: 33.312805, lng: 44.361488 }}
          zoom={16}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker />
          {addVectorLayer()}
        </MapContainer>
      </div>
      <div className={styles.resetbtn} onClick={handleReset}>
        Reset
      </div>
    </div>
      </div>
      
  );
};
