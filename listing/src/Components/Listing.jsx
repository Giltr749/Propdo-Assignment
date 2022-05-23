import React from 'react';


function Listing(props) {


    
    return (
        <div>
            <p>{`address: ${props.property.address}`}</p>
        </div>
    );
}

export default Listing;