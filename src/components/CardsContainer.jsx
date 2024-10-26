import React from "react";
import { Link } from "react-router-dom";

const CardsContainer = ({ item }) => {
  return (
    <Link
      to={`/country/${item.ccn3}`} 
      className="block shadow-lg rounded-md card w-[20rem] h-auto cursor-pointer transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={item.flags.png}
        alt={item.flags.alt}
        className="h-[13rem] w-full rounded-t-md object-cover"
      />
      <div className="p-5 flex flex-col gap-2">
        <p className="text-2xl mb-2 font-bold truncate">
          {item.name.common}
        </p>
        <p>
          <strong>Population: </strong> {item.population.toLocaleString()}
        </p>
        <p>
          <strong>Region: </strong> {item.region}
        </p>
        <p>
          <strong>Capital: </strong> {item.capital}
        </p>
        <p>
          <strong>Area: </strong> {item.area.toLocaleString()} km²
        </p>
      </div>
    </Link>
  );
};

export default CardsContainer;
