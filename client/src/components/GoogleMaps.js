import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from "@react-google-maps/api"
import { useState } from "react"
import "../utils/Map.css"

const GoogleMaps = () => {
  const { isLoaded } = useLoadScript({
  })

  const [mapRef, setMapRef] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [infoWindowData, setInfoWindowData] = useState()
  const markers = [
    { address: "SFU Burnaby", lat: 49.27804068641958, lng: -122.91997021328051 },
    { address: "A&W", lat: 49.2782863555282, lng: -122.91036445656796 },
    { address: "Coco Bubble Tea", lat: 49.26198723284644, lng: -122.8903409629877 }
  ]

  const onMapLoad = map => {
    setMapRef(map)
    const bounds = new window.google.maps.LatLngBounds()
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }))
    map.fitBounds(bounds)
  }

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng })
    setInfoWindowData({ id, address })
    setIsOpen(true)
  }

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerClassName="map-container" onLoad={onMapLoad} onClick={() => setIsOpen(false)}>
          {markers.map(({ address, lat, lng }, ind) => (
            <MarkerF
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address)
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindowF onCloseClick={() => setIsOpen(false)} position={{ lat, lng }}>
                  <div>
                    <h1>{infoWindowData?.address}</h1>
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
