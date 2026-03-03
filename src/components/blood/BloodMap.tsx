'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Droplet, Phone, MapPin, Navigation } from 'lucide-react';
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

// Component to handle map view updates
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

  if (!isMounted) return <div className="w-full h-full bg-[#0a0a0a] animate-pulse" />;

  const defaultCenter: [number, number] = [23.7509, 90.3843]; // Dhaka center
  const mapCenter = selectedDonor ? [selectedDonor.lat, selectedDonor.lng] : (userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter);
  const zoomLevel = selectedDonor ? 15 : 13;

  // Custom Donor Icon
  const donorIcon = (group: string, isSelected: boolean) => L.divIcon({
    html: renderToStaticMarkup(
      <div className={`relative transition-all duration-500 ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
        <div className={`p-2.5 rounded-2xl shadow-2xl flex items-center justify-center ${isSelected ? 'bg-red-600 ring-4 ring-white/20' : 'bg-white text-red-600 border border-red-100'}`}>
          <Droplet className={`h-7 w-7 ${isSelected ? 'fill-white' : 'fill-red-600'}`} />
          <div className="absolute -top-2 -right-2 h-6 w-6 bg-[#0f0203] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-red-600 shadow-lg">
            {group}
          </div>
        </div>
      </div>
    ),
    className: '',
    iconSize: [44, 44],
    iconAnchor: [22, 22],
  });

  // Custom User Location Icon
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
    <MapContainer 
      center={mapCenter as [number, number]} 
      zoom={13} 
      className="w-full h-full"
      zoomControl={false}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <ZoomControl position="topright" />
      <MapUpdater center={mapCenter as [number, number]} zoom={zoomLevel} />

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
          <Popup closeButton={false} offset={[0, -10]}>
            <div className="p-4 min-w-[200px] space-y-3 bg-[#1a0405]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-sm">
                  {donor.group}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base leading-none">{donor.name}</h4>
                  <p className="text-[10px] text-white/40 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> {donor.location}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`tel:${donor.phone}`} className="flex-1">
                  <Button size="sm" className="w-full bg-white text-red-600 hover:bg-red-50 h-8 rounded-lg text-[10px] font-bold">
                    <Phone className="h-3 w-3 mr-1" /> কল দিন
                  </Button>
                </Link>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-white/10 text-white h-8 rounded-lg text-[10px] font-bold"
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${donor.lat},${donor.lng}`, '_blank')}
                >
                  <Navigation className="h-3 w-3 mr-1" /> পথ দেখুন
                </Button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* User Location Marker */}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup closeButton={false}>
            <div className="p-2 text-center">
              <p className="text-xs font-bold text-blue-400">আপনি এখানে আছেন</p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
