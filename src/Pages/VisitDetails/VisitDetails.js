import React from 'react';
import { Link, useParams } from 'react-router-dom';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const VisitDetails = () => {
    const { serviceId } = useParams();

    return (
        <div className='text-center mt-2'>
            <h2>Visit Now{serviceId}</h2>


            <Link to='/checkout'>
                <button className='btn btn-primary'> Confirm Visit</button>
            </Link>
        </div>
    );
};

export default VisitDetails;