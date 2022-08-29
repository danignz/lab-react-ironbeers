import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function NewBeer() {
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    const parseValue =
      e.target.name === "attenuation_level"
        ? parseInt(e.target.value)
        : e.target.value;

    setBeer((prev) => {
      return {
        ...prev,
        [e.target.name]: parseValue,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBeer = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beer
      );
      console.log(newBeer);
      setResponseMessage(newBeer.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />

      {!responseMessage && (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={beer.name}
            onChange={handleChange}
          />
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={beer.tagline}
            onChange={handleChange}
          />
          <label>Description</label>
          <textarea
            rows="10"
            cols="50"
            name="description"
            value={beer.description}
            onChange={handleChange}
          ></textarea>
          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={beer.first_brewed}
            onChange={handleChange}
          />
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={beer.brewers_tips}
            onChange={handleChange}
          />
          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            value={beer.attenuation_level}
            onChange={handleChange}
          />
          <label>Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            value={beer.contributed_by}
            onChange={handleChange}
          />
          <button className="btn-style" type="submit">
            ADD NEW
          </button>
        </form>
      )}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
