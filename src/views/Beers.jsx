import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Beers() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      {!beers && <p>Loading</p>}
      {beers &&
        beers.map((beer) => {
          return <Card key={beer._id} beerData={beer} />;
        })}
    </div>
  );
}
