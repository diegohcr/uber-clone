/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import React, { createContext, useState } from "react";

const NavContext = createContext();

function NavProvider({ children }) {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [travelTimeInformation, setTravelTimeInformation] = useState(null);

  return (
    <NavContext.Provider
      value={{
        origin,
        setOrigin,
        destination,
        setDestination,
        travelTimeInformation,
        setTravelTimeInformation,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export { NavContext, NavProvider };
