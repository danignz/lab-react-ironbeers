import React from "react";
import { Link } from "react-router-dom";

export default function Card({ beerData }) {
  return (
    <div>
      {
        <Link className="cardContainer" to={`/beers/${beerData._id}`}>
          <div className="subCardImg">
            <img src={beerData.image_url} alt={`Pic of ${beerData.name}`} />
          </div>
          <div className="subCard">
            <h2>{beerData.name}</h2>
            <h4>{beerData.tagline}</h4>
            <p>Contributed by {beerData.contributed_by}</p>
          </div>
        </Link>
      }
    </div>
  );
}
