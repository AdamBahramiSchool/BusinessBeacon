import React, { useEffect, useState } from 'react';


/**
 * Renders a sidebar component for a business, displaying its location, name, promotion, and promotion period.
 * @param {Object} props - The props object containing the location, name, promotion, promotionPeriod, and map.
 * @param {string} props.location - The location of the business.
 * @param {string} props.name - The name of the business.
 * @param {string} props.promotion - The current promotion of the business.
 * @param {number} props.promotionPeriod - The remaining hours of the promotion.
 * @param {Object} props.map - The Google Maps object.
 * @returns {JSX.Element} - The JSX element representing the sidebar component.
 */
function BusinessSideBar({location, name, promotion, promotionPeriod, map}) {

    const [places, setPlaces] = useState([]); // Stores places returned from Google Maps API

    useEffect(() => {
        if (!map) return; // If map or google is not loaded yet, don't try to run the following code

        const service = new window.google.maps.places.PlacesService(map);

        const request = {
        query: String(location),
        fields: ['name', 'geometry', 'formatted_address'],
        };

        service.findPlaceFromQuery(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPlaces(results);
        }
        });
    }, [location, name, promotion, promotionPeriod, map]); // Re-run this effect whenever map or location changes


    return (
        
        !location
        ? <div className="side-bar-empty" style={{position: 'absolute', zIndex: 2, padding: '20px'}}>
            Select a business to view more information
        </div> 
        : <div className="side-bar" style={{position: 'absolute', zIndex: 2, padding: '20px'}}>
            {places.map((place, index) => (
            <div key={index}>
                <h2 style={{margin: '20px 0'}}>{name.toUpperCase()}</h2>
                <p style={{margin: '20px 0'}}>{place.formatted_address}</p>
                <p style={{marginTop: '20px 0', marginBottom: '5px'}}>Current Promotion:</p>
                <h2 style={{marginBottom: '20px 0'}}>{promotion}</h2>
                <p style={{margin: '20px 0'}}>Promotion ends in: {promotionPeriod} hours</p>
            </div>
            ))}
        </div>
    )
}

export default BusinessSideBar;

