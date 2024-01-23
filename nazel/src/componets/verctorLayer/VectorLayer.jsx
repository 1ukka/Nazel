import { Polygon } from 'react-leaflet';

export const VectorLayer = () => {
  // Define the coordinates for the polygon
  const polygon = [
    [33.313, 44.362], // each array here represents a point in the polygon
    [33.314, 44.363],
    [33.315, 44.364],
    // ... more points
  ];

  return (
    <Polygon pathOptions={{ color: 'purple' }} positions={polygon} />
  );
};
