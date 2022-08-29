import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import CardSingleBeer from "../components/CardSingleBeer";

export default function BeerDetails() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (beerId) {
        try {
          const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
          );
          setBeer(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/random`
          );
          setBeer(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getData();
  }, [beerId]);

  return (
    <div>
      <Header />
      {beer && <CardSingleBeer beerData={beer} />}
      {!beer && <p>Beer not found</p>}
    </div>
  );
}
