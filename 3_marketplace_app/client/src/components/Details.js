import React from "react";
import { Link } from "react-router-dom";
import { useAdsState } from "../store/Store";
import "./Details.css";

const Details = () => {
  const { selectedAd } = useAdsState();
  console.log(selectedAd);
  const showModal = () => {
    console.log("Show modal called");
  };

  if (!selectedAd) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h5>
        <Link to="/">Back to the Ads page</Link>
      </h5>
      <div className="details-card">
        <h2>{selectedAd.title}</h2>
        <p>{selectedAd.description}</p>
        <button type="button" onClick={showModal} className="custom-button">
          Click
        </button>
      </div>
    </div>
  );
};

export default Details;
