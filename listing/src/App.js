import "./App.css";
import RealEstate from "./Pages/RealEstate";
import ListingContext from "./contexts/ListingsContext";
import { useState } from "react";
import properties from "./jsons/transactions.json";

function App() {
  const [propertiesData, setPropertiesData] = useState(properties.properties);

  return (
    <ListingContext.Provider value={[propertiesData, setPropertiesData]}>
      <RealEstate />
    </ListingContext.Provider>
  );
}


export default App;
