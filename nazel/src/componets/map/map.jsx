import React, { useEffect, useState, useRef } from "react";
import styles from "./map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMapEvents,
  Circle,
} from "react-leaflet";
import { Header } from "../header/header";

export const Map = () => {
  const [position, setPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);
  const [showCircle, setShowCircle] = useState(false);
  const [coordinatesChanged, setCoordinatesChanged] = useState(false);
  const circleCoordinatesRef = useRef(null);
  const moveEndTimeout = useRef();
  const mapRef = useRef();

  function LocationMarker() {
    const map = useMapEvents({
      locationfound(e) {
        if (!position) {
          setPosition(e.latlng);
          map.flyTo(e.latlng, map.getZoom());
        }
      },
      moveend() {
        moveEndTimeout.current = setTimeout(() => {
          setShowCircle(false);
        }, 2000);
      },
      move() {
        if (position) {
          const currentCenter = map.getCenter();
          setMapCenter(currentCenter);
          circleCoordinatesRef.current = currentCenter;
          if (!currentCenter.equals(position)) {
            setShowCircle(true);
            setCoordinatesChanged(!coordinatesChanged); // Trigger a re-render
          }
          if (moveEndTimeout.current) {
            clearTimeout(moveEndTimeout.current);
          }
        }
      },
    });

    useEffect(() => {
      map.locate();
      return () => {
        map.off("locationfound");
      };
    }, [map]);

    return position ? (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null;
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
    if (mapRef.current && position) {
      mapRef.current.setView(position, 16);
    }
  };

  return (
    <div className={styles.bgimg}>
      <div className={styles.blurimg}>
        <Header />
      <div className={styles.mapheader}>
        The Map Shows Your Current Location
      </div>
      <div className={styles.mapcontent}>
        <div className={styles.coordinates}>
          {circleCoordinatesRef.current &&
            `Coordinates: ${circleCoordinatesRef.current.lat.toFixed(
              5
            )}, ${circleCoordinatesRef.current.lng.toFixed(5)}`}
        </div>
      </div>
      <div className={styles.MapContainer}>
        <MapContainer
          center={{ lat: 33.312805, lng: 44.361488 }}
          zoom={16}
          scrollWheelZoom={true}
          className={styles.map}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker />
          {showCircle && (
            <Circle
              center={mapCenter}
              radius={10}
              pathOptions={{ color: "#363F57" }}
            />
          )}
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
