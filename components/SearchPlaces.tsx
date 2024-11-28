"use client"; // Ensure this is a client component

import { useState } from "react";
import { places } from "@/constants/places"; // Import the places data

interface Place {
  name: string;
  latitude: number;
  longitude: number;
}

const SearchPlaces = () => {
  const [query, setQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);

  // Handle the search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    // Filter places based on the search query
    const filtered = places.filter((place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredPlaces(filtered);
  };

  const handlePlaceClick = (place: Place) => {
    console.log(
      `Clicked on ${place.name}, Latitude: ${place.latitude}, Longitude: ${place.longitude}`
    );
    // You can add logic to perform further actions when an item is clicked
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Your location"
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #FFB74D", // Lighter border color for emphasis
          backgroundColor: "#FFFFFF", // Lighter background color
          fontSize: "16px", // Slightly larger text for better readability
          flex: "1",
          minWidth: "30vw",
          opacity: 0.8,
        }}
      />
      {query && (
        <ul
          className="max-h-60 overflow-y-auto"
          style={{
            position: "absolute",
            top: "100%", // Position the list below the input
            left: "0",
            right: "0",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds shadow to the list
            zIndex: 10, // Ensure the list appears on top of other elements
            marginTop: "5px", // Small gap between the input and the list
          }}
        >
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place, index) => (
              <li
                key={index}
                className="bg-white p-4 border border-gray-300 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105"
                onClick={() => handlePlaceClick(place)}
              >
                <strong>{place.name}</strong>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No places found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchPlaces;
