import React, { useEffect } from "react";
import { useAdsDispatch, useAdsState } from "../store/Store";
import { Link } from "react-router-dom";
import "./Ads.css";

const Ads = () => {
  const dispatch = useAdsDispatch();
  const { ads } = useAdsState();

  // useEffect(() => {
  //   fetch("http://localhost:8080/ads")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch({ type: "SET_ADS", payload: data });
  //     });
  // }, [dispatch]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch("http://localhost:8080/ads");
        const data = await response.json();
        dispatch({ type: "SET_ADS", payload: data });
      } catch (error) {
        console.error("Failed to fetch ads:", error);
      }
    };

    fetchAds();
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
            <img
              src="https://as2.ftcdn.net/v2/jpg/05/17/53/57/1000_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg"
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
