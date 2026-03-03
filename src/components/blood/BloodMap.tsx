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

// Static default center to ensure no NaN during initialization
const DEFAULT_LAT = 23.7509;
const DEFAULT_LNG = 90.3843;
const DEFAULT_CENTER: [number, number] = [DEFAULT_LAT, DEFAULT_LNG];

// Helper to validate coordinates strictly
const isValidCoord = (val: any): val is number => {
  return typeof val === 'number' && !isNaN(val) && isFinite(val);
};

// Component to handle map centering and zoom animation with safe validation
function MapUpdater({ lat, lng, zoom, active }: { lat: number, lng: number, zoom: number, active: boolean }) {
  const map = useMap();
  
  useEffect(() => {
    if (active && isValidCoord(lat) && isValidCoord(lng)) {
      try {
        // Stop any current animation and fly to new valid coordinates
        map.stop().flyTo([lat, lng], zoom, {
          animate: true,
          duration: 1.5,
          easeLinearity: 0.25
        });
      } catch (err) {
        console.warn('Leaflet flyTo failed silently:', err);
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

  // Compute safe individual lat/lng values for the MapUpdater
  const mapCoords = useMemo(() => {
    // 1. Prioritize selected donor location with strict validation
    if (selectedDonor && isValidCoord(selectedDonor.lat) && isValidCoord(selectedDonor.lng)) {
      return { lat: selectedDonor.lat, lng: selectedDonor.lng, active: true };
    }
    
    // 2. Fallback to user location with strict validation
    if (userLocation && isValidCoord(userLocation.lat) && isValidCoord(userLocation.lng)) {
      return { lat: userLocation.lat, lng: userLocation.lng, active: true };
    }
    
    // 3. Absolute fallback to default center
    return { lat: DEFAULT_LAT, lng: DEFAULT_LNG, active: false };
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
        center={DEFAULT_CENTER} 
        zoom={13} 
        className="w-full h-full"
        zoomControl={false}
        ref={mapRef}
        preferCanvas={true}
        key={isMounted ? 'mounted' : 'unmounted'} // Force re-render on mount for proper Leaflet init
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
          if (!isValidCoord(donor.lat) || !isValidCoord(donor.lng)) {
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

        {userLocation && isValidCoord(userLocation.lat) && isValidCoord(userLocation.lng) && (
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