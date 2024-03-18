import React, { createContext, useReducer, useContext } from "react";

const AdsStateContext = createContext();
const AdsDispatchContext = createContext();

const adsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADS":
      return { ...state, ads: action.payload };
    case "SET_SELECTED_AD":
      return { ...state, selectedAd: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const AdsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adsReducer, {
    ads: [],
    selectedAd: null,
  });

  return (
    <AdsStateContext.Provider value={state}>
      <AdsDispatchContext.Provider value={dispatch}>
        {children}
      </AdsDispatchContext.Provider>
    </AdsStateContext.Provider>
  );
};

export const useAdsState = () => useContext(AdsStateContext);
export const useAdsDispatch = () => useContext(AdsDispatchContext);
