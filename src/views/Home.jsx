import React from "react";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home">
      <div className="card-container">
        <img src={beers} alt="Pic of a lot of beers" />
        <Link to="/beers">
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          explicabo odio quos voluptatum doloribus magnam? Ut commodi excepturi
          maiores incidunt.
        </p>
      </div>

      <div className="card-container">
        <img src={randomBeer} alt="Pic of beer dispenser" />
        <Link to="/random-beer">
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          explicabo odio quos voluptatum doloribus magnam? Ut commodi excepturi
          maiores incidunt.
        </p>
      </div>

      <div className="card-container">
        <img src={newBeer} alt="Pic of a glass of beer" />
        <Link to="/new-beer">
          <h1>New Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          explicabo odio quos voluptatum doloribus magnam? Ut commodi excepturi
          maiores incidunt.
        </p>
      </div>
    </div>
  );
}
