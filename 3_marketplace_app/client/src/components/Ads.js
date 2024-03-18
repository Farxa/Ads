import React, { useEffect } from "react";
import { useAdsDispatch, useAdsState } from "../store/Store";
import { Link } from "react-router-dom";
import "./Ads.css";

const Ads = () => {
  const dispatch = useAdsDispatch();
  const { ads } = useAdsState();

  useEffect(() => {
    fetch("http://localhost:8080/ads")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_ADS", payload: data });
      });
  }, [dispatch]);

  const handleAdClick = (ad) => {
    dispatch({ type: "SET_SELECTED_AD", payload: ad });
  };

  return (
    <div className="ads-container">
      <h1>Classifieds</h1>
      <div className="ads-list">
        {ads.map((ad) => (
          <div className="ad-card" key={ad.id}>
            {" "}
            <img
              src={ad.imageUrl}
              alt={ad.title}
              onClick={() => handleAdClick(ad)}
            />
            <h2 onClick={() => handleAdClick(ad)}>{ad.title}</h2>
            <p>{ad.description}</p>
            <Link to="/details" onClick={() => handleAdClick(ad)}>
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
