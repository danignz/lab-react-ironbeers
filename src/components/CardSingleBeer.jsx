import React from "react";

export default function CardSingleBeer({ beerData }) {
  return (
    <div id="containerSingleBeer">
      <figure>
        <img src={beerData.image_url} alt={`Pic of ${beerData.name}`} />
      </figure>
      <div id="subContainerSingleBeer">
        <div>
          <h2>{beerData.name}</h2>
          <p style={{ color: "var(--font-grey)" }}>{beerData.tagline}</p>
        </div>
        <div>
          <p style={{ color: "var(--font-grey)", fontSize: 22 }}>
            {beerData.attenuation_level}
          </p>
          <p style={{ fontWeight: "bolder", fontSize: 12 }}>
            {beerData.first_brewed}
          </p>
        </div>
      </div>
      <div id="thirdContainerSingleBeer">
        <p>{beerData.description}</p>
        <br/>
        <p style={{ color: "var(--font-grey)", fontSize: 12 }}>{beerData.contributed_by}</p>
      </div>
    </div>
  );
}
