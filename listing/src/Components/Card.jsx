import React, { useContext } from 'react';
import ListingContext from '../contexts/ListingsContext';
import Listing from './Listing';

function Card(props) {

    const [propertiesData, setPropertiesData] = useContext(ListingContext);

    return (
        <div>
           {propertiesData && propertiesData.map((value, i)=>{
               return <Listing property={value} key={i}/>
           })} 
        </div>
    );
}

export default Card;