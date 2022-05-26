import React, { useContext, useEffect, useState } from 'react';
import ListingContext from '../contexts/ListingsContext';
import Listing from './Listing';
import '../style/MainCard.css';

function MainCard(props) {

    const [propertiesData, setPropertiesData] = useContext(ListingContext);

    return (
        <div className='main-card'>
            {propertiesData && propertiesData.map((value, i) => {
                if (propertiesData.length !== 0)
                    return <Listing property={value} key={i} />
                {<h3>{'No Listings Found'}</h3>}
            })}
        </div>
    );
}

export default MainCard;