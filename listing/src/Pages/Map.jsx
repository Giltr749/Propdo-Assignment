import MapCard from '../Components/MapCard';
import Button from '@mui/material/Button';
import '../style/Map.css';
import { useNavigate } from 'react-router-dom';

function Map(props) {

    const navigate = useNavigate();

    const handleMain = () => {
        navigate('/Propdo-Assignment');
    }

    return (
        <div>
            <Button variant="outlined"
                sx={{
                    width: '70%',
                    left: '15%',
                    margin: '0.5rem 0'
                }}
                onClick={handleMain}
            >Go to Main Page</Button>
            <MapCard />
        </div>
    );
}

export default Map;