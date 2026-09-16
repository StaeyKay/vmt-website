import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 5.6037,
  lng: -0.1870,
};

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#1f2937" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca3af" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#1f2937" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#374151" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#374151" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#111827" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca3af" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0F2942" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#263445" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca3af" }],
  },
];

export default function LocationMap() {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });
  
    if (!isLoaded) {
      return (
        <div className="h-[400px] w-full bg-[#0F2942]" />
      );
    }
  
    return (
      <GoogleMap
        center={center}
        zoom={12}
        mapContainerClassName="h-[400px] w-full"
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker
          position={center}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#F3A81D",
            fillOpacity: 1,
            strokeColor: "#0F2942",
            strokeWeight: 3,
          }}
        />
      </GoogleMap>
    );
  }