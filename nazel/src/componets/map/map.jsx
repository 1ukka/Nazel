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
  const [popupPosition, setPopupPosition] = useState(null);
  const [position, setPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);
  const [showCircle, setShowCircle] = useState(false);
  const [coordinatesChanged, setCoordinatesChanged] = useState(false);
  const [selectedPolylineName, setSelectedPolylineName] = useState("");
  const [showPolylineCard, setShowPolylineCard] = useState(false);
  const circleCoordinatesRef = useRef(null);
  const moveEndTimeout = useRef();
  const mapRef = useRef();

  const polylineName = "طريق باب الشرجي";
  const polylineCoordinates = [
    [33.33644994166809, 44.400345692721565],
    [33.333892513925385, 44.39773444570118],
    [33.32995084128615, 44.39238183506308],
    [33.329005684044816, 44.393816735236356],
    [33.32616133032055, 44.38806784396837],
  ];

  const handleSearch = async (e) => {
    if (e.key === 'Enter' && e.target.value) {
      const query = e.target.value;
      const iraqBoundingBox = "38.7937,37.3807,48.5769,29.0694"; 
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}&viewbox=${iraqBoundingBox}&bounded=1`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          mapRef.current.flyTo([lat, lon], 16);
        } else {
          alert('Location not found.');
        }
      } catch (error) {
        console.error('Error searching for location:', error);
        alert('Failed to search for location.');
      }
    }
  };
  

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
            setCoordinatesChanged(!coordinatesChanged); 
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
    return (
      <Polyline
        pathOptions={{ color: "#363F57" }}
        positions={polylineCoordinates}
        eventHandlers={{
          click: (e) => {
            setSelectedPolylineName(polylineName);
            setShowPolylineCard(true); 
            setPopupPosition(e.latlng); 
          },
        }}
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
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for a location"
            className={styles.searchInput}
            onKeyDown={handleSearch}
          />
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
            {popupPosition && (
              <Popup
                position={popupPosition}
                onClose={() => setPopupPosition(null)}
              >
                {selectedPolylineName}
              </Popup>
            )}
          </MapContainer>
        </div>
        <div className={styles.resetbtn} onClick={handleReset}>
          Reset
        </div>
      </div>
    </div>
  );
};
