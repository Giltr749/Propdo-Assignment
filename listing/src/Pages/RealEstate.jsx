import React, { useEffect } from 'react';
import MainCard from '../Components/MainCard';
import { useState } from 'react';
import SearchInput from '../Components/SearchInput';

function RealEstate(props) {

    const [addressInput, setAddressInput] = useState('');
    const [roomsInput, setRoomsInput] = useState(1);
    const [priceAscend, setPriceAscend] = useState(true);

    useEffect(()=>{
        
    },[priceAscend])

    return (
        <div>
            <SearchInput address={{addressInput, setAddressInput}} rooms={{roomsInput, setRoomsInput}} price={{priceAscend, setPriceAscend}}/>
            <MainCard />
        </div>
    );
}

export default RealEstate;