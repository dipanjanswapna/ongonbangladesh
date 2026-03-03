
'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Droplet, MapPin } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

interface Donor {
  id: string;
  name: string;
  group: string;
  location: string;
  lat: number;
  lng: number;
  phone: string;
}

interface BloodMapProps {
  donors: Donor[];
  userLocation: { lat: number; lng: number } | null;
  selectedDonor: Donor | null;
  onSelectDonor: (donor: Donor) => void;
}

// Component to handle map view updates
function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
}

export default function BloodMap({ donors, userLocation, selectedDonor, onSelectDonor }: BloodMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full h-full bg-[#0a0a0a] animate-pulse" />;

  const defaultCenter: [number, number] = [23.7509, 90.3843]; // Dhaka center
  const mapCenter = selectedDonor ? [selectedDonor.lat, selectedDonor.lng] : (userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter);

  // Custom Donor Icon
  const donorIcon = (group: string, isSelected: boolean) => L.divIcon({
    html: renderToStaticMarkup(
      <div className={`relative transition-all duration-300 ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
        <div className={`p-2 rounded-full shadow-2xl ${isSelected ? 'bg-red-600 ring-4 ring-white/20' : 'bg-white text-red-600'}`}>
          <Droplet className={`h-6 w-6 ${isSelected ? 'fill-white' : 'fill-red-600'}`} />
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-800 text-white text-[8px] font-bold rounded-full flex items-center justify-center border border-white/20">
            {group}
          </div>
        </div>
      </div>
    ),
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  // Custom User Location Icon
  const userIcon = L.divIcon({
    html: renderToStaticMarkup(
      <div className="relative">
        <div className="h-6 w-6 bg-blue-600 rounded-full border-4 border-white shadow-2xl animate-pulse" />
        <div className="absolute -inset-6 bg-blue-600/20 rounded-full animate-ping" />
      </div>
    ),
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  return (
    <MapContainer 
      center={mapCenter as [number, number]} 
      zoom={13} 
      className="w-full h-full"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Update view when selection changes */}
      <MapUpdater center={mapCenter as [number, number]} />

      {/* Donor Markers */}
      {donors.map((donor) => (
        <Marker 
          key={donor.id} 
          position={[donor.lat, donor.lng]} 
          icon={donorIcon(donor.group, selectedDonor?.id === donor.id)}
          eventHandlers={{
            click: () => onSelectDonor(donor),
          }}
        >
          <Popup>
            <div className="text-center p-2">
              <p className="font-bold text-lg">{donor.name}</p>
              <p className="text-xs text-white/60">{donor.location}</p>
              <p className="text-red-500 font-bold mt-1">Group: {donor.group}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* User Location Marker */}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>আপনি এখানে</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
