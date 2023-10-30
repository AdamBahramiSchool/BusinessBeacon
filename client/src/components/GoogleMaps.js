import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from "@react-google-maps/api"
import { useState, useEffect, useRef} from "react"
import "../utils/Map.css"
import "../api/helper.js"
import { getAllBusinesses } from "../api/helper.js"


const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [mapRef, setMapRef] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
  const [infoWindowData, setInfoWindowData] = useState([])
  const [beacon, setBeacon] = useState(null)
  const [markers, setMarkers] = useState([])


  const onMapLoad = map => {
    if (isLoaded) {
    setMapRef(map)
    const bounds = new window.google.maps.LatLngBounds()
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }))
    map.fitBounds(bounds)
    // setIsOpen(true);
    }
  }

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng })
    setInfoWindowData({ id, address })
    setIsOpen(true)
  }

    useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        setCenter({ lat: latitude, lng: longitude })
        mapRef?.panTo({ lat: latitude, lng: longitude })

        if (isLoaded){
          setBeacon(new window.google.maps.Marker({ 
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
        }))
        }
      })
    }
  }, [mapRef])


  
  useEffect(() => {
    getAllBusinesses().then((allBusinesses) => {
      const promises = allBusinesses.map((business) => {
        const address = business.location;
        // console.log(address);
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

        return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const { lat, lng } = data.results[0].geometry.location;
            return { address, lat, lng };
          })
          .catch((error) => {
            console.log(error);
          });
      });

      Promise.all(promises).then((newMarkers) => {
        setMarkers(newMarkers);
        console.log(markers);
      });
    });
  }, []);

  
  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }



  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Getting the best deals...</h1>
      ) : (
        <GoogleMap center={center} zoom={14} mapContainerClassName="map-container" onLoad={onMapLoad} onClick={() => setIsOpen(false)}>
          {markers?.map(({ address, lat, lng }, ind) => (
            <MarkerF
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address)
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindowF onCloseClick={() => setIsOpen(false)} position={{ lat: markers[infoWindowData.id].lat, lng: markers[infoWindowData.id].lng }}>
                  <div>
                    {infoWindowData?.address}
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          ))}
        </GoogleMap>
      )}
    </div>
  )
}

export default GoogleMaps