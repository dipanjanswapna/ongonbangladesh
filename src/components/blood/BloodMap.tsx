'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Droplet } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Badge } from '@/components/ui/badge';

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

// Component to handle map centering and zoom animation with safe validation
function MapUpdater({ lat, lng, zoom, active }: { lat: number, lng: number, zoom: number, active: boolean }) {
  const map = useMap();
  
  useEffect(() => {
    // Extra safe check for lat/lng and zoom to prevent (NaN, NaN) errors
    const isLatValid = typeof lat === 'number' && !isNaN(lat) && isFinite(lat);
    const isLngValid = typeof lng === 'number' && !isNaN(lng) && isFinite(lng);
    const isZoomValid = typeof zoom === 'number' && !isNaN(zoom);

    if (active && isLatValid && isLngValid && isZoomValid) {
      try {
        map.flyTo([lat, lng], zoom, {
          animate: true,
          duration: 1.5,
          easeLinearity: 0.25
        });
      } catch (err) {
        // Silently catch Leaflet internal errors to prevent UI crash
      }
    }
  }, [lat, lng, zoom, map, active]);

  return null;
}

export default function BloodMap({ donors, userLocation, selectedDonor, onSelectDonor }: BloodMapProps) {
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultCenter: [number, number] = [23.7509, 90.3843]; // Default to Dhaka
  
  // Compute safe individual lat/lng values for the MapUpdater
  const mapCoords = useMemo(() => {
    // 1. Prioritize selected donor location with strict validation
    if (selectedDonor && 
        typeof selectedDonor.lat === 'number' && !isNaN(selectedDonor.lat) &&
        typeof selectedDonor.lng === 'number' && !isNaN(selectedDonor.lng)) {
      return { lat: selectedDonor.lat, lng: selectedDonor.lng, active: true };
    }
    
    // 2. Fallback to user location with strict validation
    if (userLocation && 
        typeof userLocation.lat === 'number' && !isNaN(userLocation.lat) &&
        typeof userLocation.lng === 'number' && !isNaN(userLocation.lng)) {
      return { lat: userLocation.lat, lng: userLocation.lng, active: true };
    }
    
    // 3. Absolute fallback to default center
    return { lat: defaultCenter[0], lng: defaultCenter[1], active: false };
  }, [selectedDonor, userLocation]);

  const zoomLevel = selectedDonor ? 17 : 14;

  if (!isMounted) return <div className="w-full h-full bg-[#0a0a0a]" />;

  // Custom Blood Drop Marker
  const donorIcon = (group: string, isSelected: boolean) => L.divIcon({
    html: renderToStaticMarkup(
      <div className={`relative transition-all duration-300 ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
        <div className={`p-2.5 rounded-2xl shadow-2xl flex items-center justify-center ${isSelected ? 'bg-red-600 ring-4 ring-white/30' : 'bg-[#1a0405] text-red-600 border border-white/10'}`}>
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

  // Custom User Location Marker (Blue Pulse)
  const userIcon = L.divIcon({
    html: renderToStaticMarkup(
      <div className="relative">
        <div className="h-6 w-6 bg-blue-500 rounded-full border-4 border-white shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse" />
        <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] font-black px-2 py-1 rounded-md whitespace-nowrap shadow-xl border border-white/10 uppercase tracking-widest">
          আপনি এখানে
        </div>
      </div>
    ),
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={defaultCenter} 
        zoom={13} 
        className="w-full h-full"
        zoomControl={false}
        ref={mapRef}
        preferCanvas={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        <ZoomControl position="topright" />
        
        <MapUpdater 
          lat={mapCoords.lat} 
          lng={mapCoords.lng} 
          zoom={zoomLevel} 
          active={mapCoords.active} 
        />

        {donors.map((donor) => {
          // Extra safety check for each marker position
          if (typeof donor.lat !== 'number' || isNaN(donor.lat) || 
              typeof donor.lng !== 'number' || isNaN(donor.lng)) {
            return null;
          }

          return (
            <Marker 
              key={donor.id} 
              position={[donor.lat, donor.lng]} 
              icon={donorIcon(donor.group, selectedDonor?.id === donor.id)}
              eventHandlers={{
                click: () => onSelectDonor(donor),
              }}
            >
              <Popup closeButton={false} offset={[0, -5]} className="donor-popup">
                <div className="p-2 min-w-[140px] text-center">
                  <h4 className="font-bold text-xs text-white leading-none">{donor.name}</h4>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Badge className="bg-red-600 text-[8px] h-4 px-1.5 font-black">{donor.group}</Badge>
                    <span className="text-[9px] text-white/40">{donor.location}</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {userLocation && 
         typeof userLocation.lat === 'number' && !isNaN(userLocation.lat) &&
         typeof userLocation.lng === 'number' && !isNaN(userLocation.lng) && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
            <Popup closeButton={false} offset={[0, -10]}>
              <div className="p-2 text-center">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">লাইভ লোকেশন সচল</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
      
      {/* Map Attribution Custom Overlay for Better UX */}
      <div className="absolute bottom-4 left-4 z-[999] opacity-30 pointer-events-none">
        <span className="text-[8px] text-white font-bold uppercase tracking-[0.2em]">ONGON LIVE MAP ENGINE v2.0</span>
      </div>
    </div>
  );
}