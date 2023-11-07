import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";

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
function BusinessSideBar({ location, name, promotion, promotionPeriod, map }) {
  const [places, setPlaces] = useState([]); // Stores places returned from Google Maps API

  useEffect(() => {
    if (!map) return; // If map or google is not loaded yet, don't try to run the following code

    const service = new window.google.maps.places.PlacesService(map);
    // service.google.maps.places.LocationBias = "IP_BIAS";

    const request = {
      query: String(name) + " " + String(location),
      fields: ["name", "geometry", "formatted_address", "photos", "rating"],
    };

    service.findPlaceFromQuery(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results
      ) {
        setPlaces(results[0]);
        // console.log(results[0]);
      }
    });
  }, [location, name, promotion, promotionPeriod, map]); // Re-run this effect whenever map or location changes

  return !location ? (
    <div
      className="side-bar-empty"
      style={{ position: "absolute", zIndex: 2, padding: "20px" }}
    >
      Select a business to view more information
    </div>
  ) : (
    <div
      className="side-bar"
      style={{ position: "absolute", zIndex: 2, padding: "20px" }}
    >
      {/* {places.map((place, index) => ( */}
      {/* <div key={index}> */}
      <div>
        {places?.photos && (
          <img
            src={places?.photos[0].getUrl()}
            alt="Business"
            style={{ width: "70%", height: "auto", marginBottom: "10px" }}
          />
        )}
        <h2>
          <span style={{ marginBottom: "20px 0", color: "gold" }}>
            {places?.rating}
          </span>
          <StarIcon sx={{ color: yellow[500] }} />
        </h2>
        <h2 style={{ margin: "20px 0" }}>{places?.name.toUpperCase()}</h2>
        <p style={{ margin: "20px 0" }}>{places?.formatted_address}</p>
        <p style={{ marginTop: "20px 0", marginBottom: "5px" }}>
          Current Promotion:
        </p>
        <h2 style={{ marginBottom: "20px 0" }}>{promotion}</h2>
        <p style={{ margin: "20px 0" }}>
          Promotion ends in: {promotionPeriod} hours
        </p>
        <Button
          variant="contained"
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            places?.name
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Directions
        </Button>
        {/* <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            places?.name
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Directions
        </a> */}
      </div>
      {/* ))} */}
    </div>
  );
}

export default BusinessSideBar;
