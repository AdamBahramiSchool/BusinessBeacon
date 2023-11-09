import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useState, useEffect, useRef } from "react";
import "../utils/Map.css";
import "../api/helper.js";
import { getAllBusinesses } from "../api/helper.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BusinessSideBar from "./BusinessSideBar";

/**
 * Renders a Google Maps component with markers for businesses
 * @returns {JSX.Element} Google Maps component
 */
const GoogleMaps = () => {
  // Load Google Maps API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // State variables
  const [mapRef, setMapRef] = useState(null); // Reference to the Google Maps instance
  const [isOpen, setIsOpen] = useState(false); // Whether an info window is open
  const [center, setCenter] = useState({ lat: 0, lng: 0 }); // Center of the map
  // const [infoWindowData, setInfoWindowData] = useState([]); // Data for the info window
  const [beacon, setBeacon] = useState(null); // Marker for the user's location
  const [markers, setMarkers] = useState([]); // Markers for the businesses
  const [currentMarker, setCurrentMarker] = useState(null);
  const prevMarker = useRef(null);

  /**
   * Callback function when the map is loaded
   * @param {Object} map - Google Maps instance
   */
  const onMapLoad = (map) => {
    if (isLoaded) {
      setMapRef(map);
      mapRef?.setZoom(5);
    }
  };

  const handleMarkerClick = (markerObj, lat, lng) => {
    mapRef?.panTo({ lat, lng });
    // setInfoWindowData({ , address });
    setIsOpen(true);
    mapRef?.setZoom(13);

    if (prevMarker.current && prevMarker.current !== markerObj.marker) {
      prevMarker.current.setAnimation(null);
    }

    // Start the animation of the clicked marker
    markerObj.marker.setAnimation(window.google.maps.Animation.BOUNCE);

    // Update the reference to the current marker
    prevMarker.current = markerObj.marker;

    setCurrentMarker(markerObj);
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
                fillColor: "#5384ED",
                strokeColor: "#ffffff",
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
      const promises = allBusinesses.map(async (business) => {
        //  save the business information
        // console.log(business);
        const { location, name, promotion, promotionPeriod, type } = business;

        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location
        )}&key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        const { lat, lng } = data.results[0].geometry.location;
        const newMarker = new window.google.maps.Marker({
          // id: business._id,
          position: { lat: lat, lng: lng },
          map: mapRef,
          animation: window.google.maps.Animation.DROP,
        });

        const markerObject = {
          location: location,
          name: name,
          promotion: promotion,
          promotionPeriod: promotionPeriod,
          type: type,
          marker: newMarker,
        };

        newMarker.addListener("click", () => {
          handleMarkerClick(markerObject, lat, lng);
        });

        return markerObject;
      });

      Promise.all(promises)
        .then((newMarkers) => {
          setMarkers(newMarkers);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [mapRef]);

  // Render the Google Maps component
  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return (
    <div className="maps-page">
      {!isLoaded ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
            justifyContents: "center",
            alignItems: "center",
          }}
        >
          <BusinessSideBar
            location={currentMarker?.location}
            name={currentMarker?.name}
            promotion={currentMarker?.promotion}
            promotionPeriod={currentMarker?.promotionPeriod}
            map={mapRef}
          />
          <GoogleMap
            center={center}
            zoom={12}
            mapContainerClassName="map-container"
            onLoad={onMapLoad}
            onClick={() => setIsOpen(false)}
          >
            {/* {markers?.map(({ marker }, ind) => (
              <MarkerF
                key={ind}
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
                // onClick={() => {
                //   handleMarkerClick(
                //     marker.getPosition().lat(),
                //     marker.getPosition().lng(),
                //     address
                //   );
                // }}
                // animationnimation={window.google.maps.Animation.BOUNCE}
              > */}
            {/* {isOpen && infoWindowData?.id === ind && (
                  <InfoWindowF
                    onCloseClick={() => setIsOpen(false)}
                    position={{
                      lat: markers[infoWindowData.id].lat,
                      lng: markers[infoWindowData.id].lng,
                    }}
                  >
                    <div>
                      <h1>{markers[infoWindowData.id].name.toUpperCase()}</h1>
                      <h2>{markers[infoWindowData.id].promotion}</h2>
                      <p>
                        Promotion Period:{" "}
                        {markers[infoWindowData.id].promotionPeriod} hours.
                      </p>
                      <div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${
                            markers[infoWindowData.id].lat
                          },${markers[infoWindowData.id].lng}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Directions
                        </a>
                      </div>
                    </div>
                  </InfoWindowF>
                )} */}
            {/* </MarkerF>
            ))} */}
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default GoogleMaps;
