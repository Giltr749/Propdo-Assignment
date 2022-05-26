import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../style/Listing.css';
import { useEffect } from 'react';


function Listing(props) {

    const randImg = () => {
        const randomNum = (Math.floor(Math.random() * 4)) + 1;
        return randomNum;
    }

    return (
        <div className='main-div'>
            <div className='img-div'>

            </div>
            <div className='card-div'>
                <Card sx={{ minWidth: 275 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={require(`../Images/prop${randImg()}.jpg`)}
                        alt="House Image"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {`Address: ${JSON.parse(`"${props.property.address}"`)}`}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {`Price: ${props.property.price} ILS`}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {`Area: ${props.property.sqm} SQM`}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {`Rooms: ${props.property.num_rooms}`}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {`Floor ${props.property.floor} out of ${props.property.num_floors}`}
                        </Typography>

                        {/* <span>
                        Elevator: 
                        {!!(props.property.elevator)
                            ? <Typography variant="h5" component="div" style={{ color: "green" }}>V</Typography>
                            : <Typography variant="h5" component="div" style={{ color: "red" }}>X</Typography>}
                    </span> */}

                        <Typography variant="h5" component="div">
                            {`Elavator: ${!!(props.property.elevator) ? `V` : `X`}`}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {`Parking: ${props.property.parking}`}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>

    );
}
/* <p>{`address: ${props.property.address}`}</p> */

export default Listing;