import "./App.css";
import RealEstate from "./Pages/RealEstate";
import Map from "./Pages/Map";
import ListingContext from "./contexts/ListingsContext";
import { useState } from "react";
import properties from "./jsons/transactions.json";
import FixedPropertiesContext from "./contexts/FixedPropertiesContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    const [propertiesData, setPropertiesData] = useState(properties.properties);
    const [fixedData, setFixedData] = useState(properties.properties);


    return (
        <FixedPropertiesContext.Provider value={[fixedData, setFixedData]}>
            <ListingContext.Provider value={[propertiesData, setPropertiesData]}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/Propdo-Assignment" element={<RealEstate />} />
                        <Route path="/map" element={<Map />} />

                    </Routes>
                </BrowserRouter>
            </ListingContext.Provider>
        </FixedPropertiesContext.Provider>
    );
}


export default App;