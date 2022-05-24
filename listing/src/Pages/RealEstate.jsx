import React, { useEffect } from 'react';
import MainCard from '../Components/MainCard';
import { useState, useContext } from 'react';
import SearchInput from '../Components/SearchInput';
import ListingContext from '../contexts/ListingsContext';

function RealEstate(props) {

    const [propertiesData, setPropertiesData] = useContext(ListingContext);
    const [rawData, setRawData] = useContext(ListingContext);

    const [addressInput, setAddressInput] = useState('');
    const [roomsInput, setRoomsInput] = useState(1);
    const [priceAscend, setPriceAscend] = useState(true);
    
    //Sorts according to price ascending/descending
    useEffect(() => {
        let tempArr = propertiesData;
        priceAscend
            ? tempArr.sort((a, b) => {
                if (a.price < b.price)
                    return 1;
                else if (a.price > b.price)
                    return -1;
            })
            : tempArr.sort((a, b) => {
                if (a.price > b.price)
                    return 1;
                else if (a.price < b.price)
                    return -1;
            })

            setPropertiesData(tempArr);
            // console.log(tempArr);
    }, [priceAscend])

    return (
        <div>
            <SearchInput address={{ addressInput, setAddressInput }} rooms={{ roomsInput, setRoomsInput }} price={{ priceAscend, setPriceAscend }} />
            <MainCard />
        </div>
    );
}

export default RealEstate;