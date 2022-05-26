import "./App.css";
import RealEstate from "./Pages/RealEstate";
import ListingContext from "./contexts/ListingsContext";
import { useEffect, useState } from "react";
import properties from "./jsons/transactions.json";
import FixedPropertiesContext from "./contexts/FixedPropertiesContext";

function App() {
    const [propertiesData, setPropertiesData] = useState(properties.properties);
    const [fixedData, setFixedData] = useState(properties.properties);


    return (
        <FixedPropertiesContext.Provider value={[fixedData, setFixedData]}>
            <ListingContext.Provider value={[propertiesData, setPropertiesData]}>
                <RealEstate />
            </ListingContext.Provider>
        </FixedPropertiesContext.Provider>
    );
}


export default App;