import React from "react";
import "./Card.css";

function Card({name, capital, flag, population, continent}) {
  return (
    <div className="card">
      <div className="card__content">
        <img
          src={flag}
          className="card__img"
          alt="flag"
        />
        <div className="card__subtitle">
          <p>Name: {name}</p>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <p>Continent: {continent}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
