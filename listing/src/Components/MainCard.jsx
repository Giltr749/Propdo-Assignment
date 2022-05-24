import React, { useContext, useState } from 'react';
import ListingContext from '../contexts/ListingsContext';
import Listing from './Listing';
import '../style/MainCard.css';

function MainCard(props) {

    const [propertiesData, setPropertiesData] = useContext(ListingContext);
    
    return (
        <div className='main-card'>
           {propertiesData && propertiesData.map((value, i)=>{
               return <Listing property={value} key={i}/>
           })} 
        </div>
    );
}

export default MainCard;