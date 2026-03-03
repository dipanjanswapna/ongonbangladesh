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

  const defaultCenter: [number, number] = [23.7509, 90.3843];
  const mapCenter = selectedDonor ? [selectedDonor.lat, selectedDonor.lng] : (userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter);
  const zoomLevel = selectedDonor ? 15 : 13;

  const donorIcon = (group: string, isSelected: boolean) => L.divIcon({
    html: renderToStaticMarkup(
      <div className={`relative transition-all duration-300 ${isSelected ? 'scale-110' : 'hover:scale-105'}`}>
        <div className={`p-2 rounded-2xl shadow-2xl flex items-center justify-center ${isSelected ? 'bg-red-600 ring-2 ring-white/50' : 'bg-white text-red-600 border border-red-200'}`}>
          <Droplet className={`h-6 w-6 ${isSelected ? 'fill-white' : 'fill-red-600'}`} />
          <div className="absolute -top-1 -right-1 h-5 w-5 bg-[#0f0203] text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-red-600">
            {group}
          </div>
        </div>
      </div>
    ),
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const userIcon = L.divIcon({
    html: renderToStaticMarkup(
      <div className="relative">
        <div className="h-5 w-5 bg-blue-500 rounded-full border-2 border-white shadow-xl animate-pulse" />
        <div className="absolute -inset-3 bg-blue-500/20 rounded-full animate-ping" />
      </div>
    ),
    className: '',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  return (
    <div className="w-full h-full relative">
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
            <Popup closeButton={false} offset={[0, -5]}>
              <div className="p-3 min-w-[180px] bg-[#1a0405] text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                    {donor.group}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-none">{donor.name}</h4>
                    <p className="text-[9px] text-white/40 flex items-center gap-1 mt-1">
                      <MapPin className="h-2 w-2" /> {donor.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`tel:${donor.phone}`} className="flex-1">
                    <Button size="sm" className="w-full bg-white text-red-600 hover:bg-red-50 h-7 rounded-md text-[9px] font-bold">
                      কল করুন
                    </Button>
                  </Link>
                </div>
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
