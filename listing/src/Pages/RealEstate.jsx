import React, { useEffect } from 'react';
import MainCard from '../Components/MainCard';
import { useState, useContext } from 'react';
import SearchInput from '../Components/SearchInput';
import ListingContext from '../contexts/ListingsContext';
import FixedPropertiesContext from '../contexts/FixedPropertiesContext';
import Button from '@mui/material/Button';
import '../style/RealEstate.css';
import {useNavigate} from 'react-router-dom';

function RealEstate(props) {

    const [propertiesData, setPropertiesData] = useContext(ListingContext);
    const [fixedData, setFixedData] = useContext(FixedPropertiesContext);

    const [addressInput, setAddressInput] = useState('');
    const [roomsInput, setRoomsInput] = useState(0);
    const [priceAscend, setPriceAscend] = useState(false);

    const navigate = useNavigate();

    const toUnicode = (str) => {
        var result = '';
        for (let i = 0; i < str.length; i++) {
            result += '\\u' + ('0' + str[i].charCodeAt(0).toString(16)).substring(-4);
        }
        return result;
    }

    useEffect(() => {

        let tempArr = fixedData;

        //Filters according to search input
        if (addressInput.length !== 0) {
            tempArr = propertiesData.filter((property) => {
                return (JSON.parse(`"${property.address}"`).includes(addressInput));
            });
            setPropertiesData(tempArr);
        }
        else
            setPropertiesData(fixedData);

        //Sorts according to price ascending/descending
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

        //Filters according to number of rooms
        if (roomsInput != 0) {
            tempArr = propertiesData.filter((property) => {
                return (property.num_rooms == roomsInput);
            });
        }
        setPropertiesData(tempArr);

    }, [roomsInput, addressInput, priceAscend])

    const handleRedirect = () =>{
        navigate('/map');
    }

    return (
        <div>
            <SearchInput address={{ addressInput, setAddressInput }} rooms={{ roomsInput, setRoomsInput }} price={{ priceAscend, setPriceAscend }} />
            <div className='btn-div'>
            <Button className = "map-btn" variant="outlined" onClick={handleRedirect}>Go to Map</Button>
            </div>
            <MainCard />
        </div>
    );
}

export default RealEstate;