import { Card, CardContent, Typography, TextField, Box, Select, MenuItem, InputLabel } from '@mui/material';
import React, { useEffect } from 'react';
import '../style/SearchInput.css';

function SearchInput(props) {

    const handlePrice = (e) => {
        props.price.setPriceAscend(e.target.value);
    };

    const handleRooms = (e) => {
        props.rooms.setRoomsInput(e.target.value);
    };

    const handleAddress = (e) => {
        props.address.setAddressInput(e.target.value);
    }

    return (
        <div className='search-div'>
            <div className='inner-div'>
                <Box maxWidth={200}>
                    <Card variant="outlined">
                        <CardContent>
                            <InputLabel id="address">Address:</InputLabel>
                            <TextField
                                label="address"
                                id="outlined-search"
                                label="Search by address"
                                type="search"
                                onChange={handleAddress}
                            />
                            <InputLabel id="rooms">Number of rooms:</InputLabel>
                            <Select
                                value={props.rooms.roomsInput}
                                label="Rooms"
                                onChange={handleRooms}
                                label="rooms"
                                fullWidth
                            >
                                <MenuItem value={0}>All</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                            </Select>
                            <InputLabel id="price">Prices:</InputLabel>
                            <Select
                                value={props.price.priceAscend}
                                label="Rooms"
                                onChange={handlePrice}
                                label="Prices"
                                fullWidth
                            >
                                <MenuItem value={true}>Ascending</MenuItem>
                                <MenuItem value={false}>Descending</MenuItem>
                            </Select>
                        </CardContent>
                    </Card>
                </Box>
            </div>
        </div>
    );
}

export default SearchInput;