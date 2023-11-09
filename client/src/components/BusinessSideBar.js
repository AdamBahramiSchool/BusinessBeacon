import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import "../utils/Map.css";

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
    <div className="side-bar side-bar-empty">
      Select a business to view more information
    </div>
  ) : (
    <div className="side-bar">
      {places?.photos && (
        <img
          className="business-photo"
          src={places?.photos[0].getUrl()}
          alt="Business"
        />
      )}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "0.5rem",
        }}
      >
        <div
          className="format-box box-1"
          style={{ width: "78%", height: "19%" }}
        >
          {places?.name.toUpperCase()}
        </div>
        <div
          className="format-box box-2"
          style={{ width: "20%", height: "19%" }}
        >
          <span>{places?.rating}</span>
          <StarIcon sx={{ color: yellow[500] }} />
        </div>
        <div
          className="format-box box-3"
          style={{ width: "100%", height: "15%" }}
        >
          <p>{places?.formatted_address}</p>
        </div>
        <div
          className="format-box box-4"
          style={{ width: "100%", height: "23%" }}
        >
          Promotion: {promotion}
        </div>
        <div
          className="format-box box-5"
          style={{ width: "58%", height: "19%" }}
        >
          Promotion ends in: {promotionPeriod}
        </div>
        <a
          className="format-box direction-button box-6"
          style={{ width: "40%", height: "19%" }}
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            places?.name
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Directions
        </a>
      </div>

      {/* <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            places?.name
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Directions
        </a> */}

      {/* ))} */}
    </div>
  );
}

export default BusinessSideBar;
