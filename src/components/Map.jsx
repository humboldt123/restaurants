import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom orange marker icon
const orangeIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 0C5.596 0 0 5.596 0 12.5c0 9.375 12.5 28.5 12.5 28.5S25 21.875 25 12.5C25 5.596 19.404 0 12.5 0z" fill="#ff6b35"/>
      <circle cx="12.5" cy="12.5" r="6" fill="#fff"/>
    </svg>
  `),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Component to update map center when location changes
function ChangeMapView({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15);
  }, [center, map]);
  return null;
}

// Component to fix map rendering on initial load
function MapSizeFix() {
  const map = useMap();
  useEffect(() => {
    // Small delay to ensure container is rendered
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

export default function Map({ location, name }) {
  const position = [location.lat, location.lng];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-hidden rounded-md shadow-lg">
        <MapContainer
          center={position}
          zoom={15}
          className="h-full w-full"
          style={{ backgroundColor: '#f0f0f0' }}
          zoomControl={false}
          attributionControl={false}
        >
          <ChangeMapView center={position} />
          <MapSizeFix />
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution=''
            subdomains="abcd"
            maxZoom={20}
          />
          <Marker position={position} icon={orangeIcon}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="text-right text-[8px] text-gray-500 mt-1">
        © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">OpenStreetMap</a> contributors, © <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">CARTO</a>
      </div>
    </div>
  );
}
