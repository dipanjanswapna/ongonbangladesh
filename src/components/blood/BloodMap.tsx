'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Droplet, MapPin } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

// Component to handle map centering and zoom animation
function MapUpdater({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 1 });
  }, [center, zoom, map]);
  return null;
}

export default function BloodMap({ donors, userLocation, selectedDonor, onSelectDonor }: BloodMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full h-full bg-[#0a0a0a]" />;

  const defaultCenter: [number, number] = [23.7509, 90.3843]; // Default to Dhaka
  const mapCenter = selectedDonor 
    ? [selectedDonor.lat, selectedDonor.lng] 
    : (userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter);
  const zoomLevel = selectedDonor ? 16 : 13;

  // Custom Blood Drop Marker
  const donorIcon = (group: string, isSelected: boolean) => L.divIcon({
    html: renderToStaticMarkup(
      <div className={`relative transition-all duration-300 ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
        <div className={`p-2.5 rounded-2xl shadow-2xl flex items-center justify-center ${isSelected ? 'bg-red-600 ring-4 ring-white/30' : 'bg-white text-red-600 border border-red-200'}`}>
          <Droplet className={`h-7 w-7 ${isSelected ? 'fill-white' : 'fill-red-600'}`} />
          <div className="absolute -top-1.5 -right-1.5 h-6 w-6 bg-[#0f0203] text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-red-600 shadow-lg">
            {group}
          </div>
        </div>
      </div>
    ),
    className: '',
    iconSize: [44, 44],
    iconAnchor: [22, 22],
  });

  // Custom User Location Marker
  const userIcon = L.divIcon({
    html: renderToStaticMarkup(
      <div className="relative">
        <div className="h-6 w-6 bg-blue-500 rounded-full border-4 border-white shadow-2xl animate-pulse" />
        <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping" />
      </div>
    ),
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={mapCenter as [number, number]} 
        zoom={13} 
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <ZoomControl position="topright" />
        <MapUpdater center={mapCenter as [number, number]} zoom={zoomLevel} />

        {donors.map((donor) => (
          <Marker 
            key={donor.id} 
            position={[donor.lat, donor.lng]} 
            icon={donorIcon(donor.group, selectedDonor?.id === donor.id)}
            eventHandlers={{
              click: () => onSelectDonor(donor),
            }}
          >
            {/* Minimal popup since we have the overlay card */}
            <Popup closeButton={false} offset={[0, -5]} className="donor-popup">
              <div className="p-2 min-w-[120px] text-center">
                <h4 className="font-bold text-xs text-white leading-none">{donor.name}</h4>
                <p className="text-[9px] text-white/40 mt-1">{donor.group} Group</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
            <Popup closeButton={false}>
              <p className="text-[10px] font-bold text-blue-500 p-1">আপনার অবস্থান</p>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
