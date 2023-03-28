import React, { useState, useEffect } from "react";
import benefitsData from "../data/benefits.json";

export default function BearsData() {
  const [benefits, setBenefits] = useState([]);
  const [bearsData, setBearsData] = useState([]);

  useEffect(() => {
    try {
      const bearsData = benefitsData;
      setBearsData(bearsData);
      setBenefits(bearsData.content);
      console.log("Data loaded successfully:", benefitsData);
    } catch (error) {
      console.error(
        "An error occurred while setting the benefits data:",
        error
      );
    }
  }, []);

  return (
    <div>
      <h1>{bearsData.page_title}</h1>
      {benefits.map((benefit) => (
        <div key={benefit.id}>
          <h2>{benefit.title}</h2>
          <p>{benefit.summary}</p>
        </div>
      ))}
    </div>
  );
}
