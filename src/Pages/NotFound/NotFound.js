import React from 'react';
import errorImg from '../../Images/404/404.png'

const NotFound = () => {
    return (
        <div className='mt-2'>
            <h1 className='text-danger text-center'>Error:404</h1>
            <p className='text-danger text-center'>No result found</p>
            <div className='text-center '>
                <img src={errorImg} alt="" />

            </div>


        </div>
    );
};

export default NotFound;