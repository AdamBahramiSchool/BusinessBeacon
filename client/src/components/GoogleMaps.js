import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';
import { useState, useEffect, useRef } from 'react';
import '../utils/Map.css';
import '../api/helper.js';
import { getAllBusinesses } from '../api/helper.js';

/**
 * Renders a Google Maps component with markers for businesses
 * @returns {JSX.Element} Google Maps component
 */
const GoogleMaps = () => {
  // Load Google Maps API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // State variables
  const [mapRef, setMapRef] = useState(null); // Reference to the Google Maps instance
  const [isOpen, setIsOpen] = useState(false); // Whether an info window is open
  const [center, setCenter] = useState({ lat: 0, lng: 0 }); // Center of the map
  const [infoWindowData, setInfoWindowData] = useState([]); // Data for the info window
  const [beacon, setBeacon] = useState(null); // Marker for the user's location
  const [markers, setMarkers] = useState([]); // Markers for the businesses

  /**
   * Callback function when the map is loaded
   * @param {Object} map - Google Maps instance
   */
  const onMapLoad = (map) => {
    if (isLoaded) {
      setMapRef(map);
      // const bounds = new window.google.maps.LatLngBounds();
      // markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
      // const padding = { top: 5, right: 10, bottom: 5, left: 10 };
      // map.fitBounds(bounds);
      // zoom in more
      // map.setZoom(map.getZoom() - 1);
      mapRef?.setZoom(5);
    }
  };

  /**
   * Callback function when a marker is clicked
   * @param {number} id - Index of the marker
   * @param {number} lat - Latitude of the marker
   * @param {number} lng - Longitude of the marker
   * @param {string} address - Address of the marker
   */
  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
    mapRef?.setZoom(13);
  };

  // Get the user's location and set the center of the map
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
        mapRef?.panTo({ lat: latitude, lng: longitude });

        // Add a marker for the user's location
        if (isLoaded) {
          setBeacon(
            new window.google.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map: mapRef,
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillOpacity: 1,
                strokeWeight: 2,
                fillColor: '#5384ED',
                strokeColor: '#ffffff',
              },
            })
          );
        }
      });
    }
  }, [mapRef]);

  // Get the locations of all businesses and add markers for them
  useEffect(() => {
    getAllBusinesses().then((allBusinesses) => {
      const promises = allBusinesses.map((business) => {
        //  save the business information
        // console.log(business);
        const {location, name, promotion, promotionPeriod, type} = business;
        // console.log(promotion);
        // console.log(promotionPeriod);
        // const address = location;
        // console.log(address);
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location
        )}&key=${apiKey}`;

        return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const { lat, lng } = data.results[0].geometry.location;
            return {location, lat, lng, name: name, promotion: promotion, promotionPeriod: promotionPeriod, type: type};
          })
          .catch((error) => {
            console.log(error);
          });
      });

      Promise.all(promises).then((newMarkers) => {
        setMarkers(newMarkers);
        
        // console.log(markers);
      });
    });
  }, []);

  // Render the Google Maps component
  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Getting the best deals...</h1>
      ) : (
        <GoogleMap
          center={center}
          zoom={12}
          mapContainerClassName="map-container"
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
        >
          {markers?.map(({ address, lat, lng }, ind) => (
            <MarkerF
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address);
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindowF
                  onCloseClick={() => setIsOpen(false)}
                  position={{
                    lat: markers[infoWindowData.id].lat,
                    lng: markers[infoWindowData.id].lng,
                  }}  
                >
                  {/* Display Info Window */}
                  <div>
                    <h1>
                      {markers[infoWindowData.id].name}
                    </h1>
                    <h2>
                      {markers[infoWindowData.id].promotion}
                    </h2>
                    <p>Promotion Period: {markers[infoWindowData.id].promotionPeriod} hours.</p>  
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMaps;
