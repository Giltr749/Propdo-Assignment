import React, { useEffect } from 'react';
import MainCard from '../Components/MainCard';
import { useState, useContext } from 'react';
import SearchInput from '../Components/SearchInput';
import ListingContext from '../contexts/ListingsContext';
import FixedPropertiesContext from '../contexts/FixedPropertiesContext';

function RealEstate(props) {

    const [propertiesData, setPropertiesData] = useContext(ListingContext);
    const [fixedData, setFixedData] = useContext(FixedPropertiesContext);

    const [addressInput, setAddressInput] = useState('');
    const [roomsInput, setRoomsInput] = useState(1);
    const [priceAscend, setPriceAscend] = useState(true);

    const toUnicode = (str) => {
        
        var result = '';
        for (let i = 0; i < str.length; i++) {
            result += '\\u' + ('0' + str[i].charCodeAt(0).toString(16)).substring(-4);
        }
        console.log(result);
        return result;
    }

    //Sorts according to price ascending/descending
    useEffect(() => {
        let tempArr = propertiesData;
        priceAscend
            ? tempArr.sort((a, b) => {
                if (a.price < b.price)
                    return 1;
                else if (a.price > b.price)
                    return -1;
                return 0;
            })
            : tempArr.sort((a, b) => {
                if (a.price > b.price)
                    return 1;
                else if (a.price < b.price)
                    return -1;
                return 0;
            })

        setPropertiesData(tempArr);
    }, [priceAscend])

    //Filters according to seatch input
    useEffect(() => {

        const temp = toUnicode(addressInput);
        // console.log(JSON.parse(`"${test}"`));
        let tempArr = fixedData;
        if (addressInput.length !== 0) {
            tempArr = fixedData.filter((property) => {
                return (JSON.parse(`"${property.address}"`).includes(addressInput));
            })
            setPropertiesData(tempArr);
        }
        else
            setPropertiesData(fixedData);
        console.log(propertiesData);
    }, [addressInput])

    return (
        <div>
            <SearchInput address={{ addressInput, setAddressInput }} rooms={{ roomsInput, setRoomsInput }} price={{ priceAscend, setPriceAscend }} />
            <MainCard />
        </div>
    );
}

export default RealEstate;