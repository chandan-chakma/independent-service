import React from 'react';
import { Link, useParams } from 'react-router-dom';


const VisitDetails = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h2>Visit Now{serviceId}</h2>

            <Link to='/checkout'>
                <button className='btn btn-primary'> Confirm Visit</button>
            </Link>


        </div>
    );
};

export default VisitDetails;